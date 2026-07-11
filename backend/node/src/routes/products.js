import { Router } from 'express'
import { supabaseAdmin } from '../config/supabase.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = Router()

// GET /api/products — list active products, ordered for display
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.json({ products: data })
  }),
)

// GET /api/products/:slug — single product by slug
router.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .eq('slug', req.params.slug)
      .eq('is_active', true)
      .maybeSingle()

    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    if (!data) return res.status(404).json({ error: 'Product not found' })
    res.json({ product: data })
  }),
)

export default router
