# ZYRO Supabase Setup

1. Create a project at supabase.com (if you haven't already).
2. Open **SQL Editor** in the Supabase dashboard.
3. Run `migrations/001_schema.sql`, then `migrations/002_seed.sql`, in that order.
4. Sign up once through the site's own auth flow (or Supabase Auth dashboard)
   with the email you want as admin.
5. Run `migrations/003_promote_admin.sql` with that email uncommented to
   grant admin access.
6. Copy **Project URL**, **anon public key**, and **service_role key** from
   Settings → API into `backend/node/.env` (see `.env.example`).

The `service_role` key bypasses Row Level Security and must never be shipped
to the frontend — it's used only by the Node backend for admin operations
(coupon validation, admin CRUD, etc).
