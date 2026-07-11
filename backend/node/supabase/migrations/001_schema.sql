-- ZYRO database schema
-- Run this in the Supabase SQL Editor (or `supabase db push`) on a fresh project.

create extension if not exists "pgcrypto";

-- ── profiles ────────────────────────────────────────────────────────────────
-- One row per auth user. Drives admin access via `role`.
create table if not exists profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "profiles: read own" on profiles
  for select using (auth.uid() = id);

create policy "profiles: admin reads all" on profiles
  for select using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- Auto-create a profile row whenever a new auth user signs up.
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- ── products ────────────────────────────────────────────────────────────────
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  tagline text,
  description text,
  color_name text,
  color_hex text,
  price numeric(10, 2) not null default 2.99,
  case_price numeric(10, 2) not null default 34.99,
  case_size int not null default 12,
  hero_image text,
  card_image text,
  label_image text,
  benefits text[] not null default '{}',
  chips text[] not null default '{}',
  supplement_facts jsonb not null default '[]',
  nutrition jsonb not null default '{}',
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table products enable row level security;

create policy "products: public reads active" on products
  for select using (is_active = true);

create policy "products: admin manages all" on products
  for all using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  ) with check (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- ── customers ───────────────────────────────────────────────────────────────
create table if not exists customers (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  email text not null,
  shipping_address jsonb,
  created_at timestamptz not null default now()
);

alter table customers enable row level security;

create policy "customers: read own" on customers
  for select using (auth.uid() = id);

create policy "customers: update own" on customers
  for update using (auth.uid() = id);

create policy "customers: admin manages all" on customers
  for all using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- ── orders ──────────────────────────────────────────────────────────────────
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers (id) on delete set null,
  guest_email text,
  status text not null default 'pending' check (
    status in ('pending', 'paid', 'shipped', 'delivered', 'cancelled')
  ),
  subtotal numeric(10, 2) not null default 0,
  discount numeric(10, 2) not null default 0,
  total numeric(10, 2) not null default 0,
  coupon_code text,
  created_at timestamptz not null default now()
);

alter table orders enable row level security;

create policy "orders: read own" on orders
  for select using (auth.uid() = customer_id);

create policy "orders: admin manages all" on orders
  for all using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders (id) on delete cascade,
  product_id uuid references products (id) on delete set null,
  product_name text not null,
  quantity int not null check (quantity > 0),
  unit_price numeric(10, 2) not null
);

alter table order_items enable row level security;

create policy "order_items: read via own order" on order_items
  for select using (
    exists (select 1 from orders o where o.id = order_id and o.customer_id = auth.uid())
  );

create policy "order_items: admin manages all" on order_items
  for all using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- ── coupons ─────────────────────────────────────────────────────────────────
-- Not publicly readable — validated server-side only, via the service role key.
create table if not exists coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  discount_percent numeric(5, 2),
  discount_amount numeric(10, 2),
  max_uses int,
  used_count int not null default 0,
  expires_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table coupons enable row level security;

create policy "coupons: admin manages all" on coupons
  for all using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- ── blogs ───────────────────────────────────────────────────────────────────
create table if not exists blogs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text,
  cover_image text,
  author text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

alter table blogs enable row level security;

create policy "blogs: public reads published" on blogs
  for select using (published_at is not null and published_at <= now());

create policy "blogs: admin manages all" on blogs
  for all using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- ── contact_messages ────────────────────────────────────────────────────────
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "contact_messages: anyone can submit" on contact_messages
  for insert with check (true);

create policy "contact_messages: admin reads all" on contact_messages
  for select using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

create policy "contact_messages: admin updates all" on contact_messages
  for update using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- ── newsletter_subscribers ──────────────────────────────────────────────────
create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed_at timestamptz not null default now(),
  is_active boolean not null default true
);

alter table newsletter_subscribers enable row level security;

create policy "newsletter_subscribers: anyone can subscribe" on newsletter_subscribers
  for insert with check (true);

create policy "newsletter_subscribers: admin reads all" on newsletter_subscribers
  for select using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
  );
