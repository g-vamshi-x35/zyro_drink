-- One-time: promote your own account to admin after you've signed up once
-- through the site's normal auth flow (so a profiles row already exists).
-- Run this manually in the Supabase SQL Editor with your own email —
-- it is NOT applied automatically.

-- update profiles set role = 'admin' where email = 'you@example.com';
