import { supabaseAnon, supabaseAdmin } from '../config/supabase.js'

/**
 * Verifies the Supabase access token sent as `Authorization: Bearer <token>`.
 * The frontend obtains this token directly from supabase-js (signInWithPassword /
 * signUp) — this backend never issues its own JWTs, it only verifies Supabase's.
 */
export async function requireAuth(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null

  if (!token) {
    return res.status(401).json({ error: 'Missing bearer token' })
  }

  const { data, error } = await supabaseAnon.auth.getUser(token)
  if (error || !data?.user) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }

  req.user = data.user
  req.accessToken = token
  next()
}

/**
 * Must run after requireAuth. Confirms the authenticated user has an
 * admin profile before allowing access to admin-only routes.
 */
export async function requireAdmin(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  const { data, error } = await supabaseAdmin
    .from('profiles')
    .select('role')
    .eq('id', req.user.id)
    .single()

  if (error || data?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' })
  }

  next()
}
