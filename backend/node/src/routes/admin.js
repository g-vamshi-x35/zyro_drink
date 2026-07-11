import { Router } from 'express'
import { supabaseAdmin } from '../config/supabase.js'
import { asyncHandler } from '../middleware/errorHandler.js'
import { requireAuth, requireAdmin } from '../middleware/auth.js'

const router = Router()

// Every route below requires a valid Supabase session AND an admin profile.
router.use(requireAuth, requireAdmin)

// ---- Products (CMS-style CRUD) ----
router.get(
  '/products',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true })
    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.json({ products: data })
  }),
)

router.post(
  '/products',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin.from('products').insert(req.body).select().single()
    if (error) throw Object.assign(new Error(error.message), { status: 400 })
    res.status(201).json({ product: data })
  }),
)

router.put(
  '/products/:id',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('products')
      .update({ ...req.body, updated_at: new Date().toISOString() })
      .eq('id', req.params.id)
      .select()
      .single()
    if (error) throw Object.assign(new Error(error.message), { status: 400 })
    res.json({ product: data })
  }),
)

router.delete(
  '/products/:id',
  asyncHandler(async (req, res) => {
    const { error } = await supabaseAdmin.from('products').delete().eq('id', req.params.id)
    if (error) throw Object.assign(new Error(error.message), { status: 400 })
    res.status(204).end()
  }),
)

// ---- Contact messages (read + mark read) ----
router.get(
  '/contact-messages',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.json({ messages: data })
  }),
)

router.put(
  '/contact-messages/:id/read',
  asyncHandler(async (req, res) => {
    const { error } = await supabaseAdmin
      .from('contact_messages')
      .update({ is_read: true })
      .eq('id', req.params.id)
    if (error) throw Object.assign(new Error(error.message), { status: 400 })
    res.json({ ok: true })
  }),
)

// ---- Newsletter subscribers (read-only export) ----
router.get(
  '/newsletter-subscribers',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false })
    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.json({ subscribers: data })
  }),
)

// ---- Orders (read-only for now — order creation happens at checkout, not built yet) ----
router.get(
  '/orders',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*, order_items(*)')
      .order('created_at', { ascending: false })
    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.json({ orders: data })
  }),
)

export default router
