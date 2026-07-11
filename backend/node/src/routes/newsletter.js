import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { supabaseAdmin } from '../config/supabase.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = Router()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const newsletterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts. Please try again later.' },
})

router.post(
  '/',
  newsletterLimiter,
  asyncHandler(async (req, res) => {
    const { email } = req.body || {}

    if (!email?.trim() || !EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'A valid email is required' })
    }

    const { error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .upsert({ email: email.trim().toLowerCase() }, { onConflict: 'email', ignoreDuplicates: true })

    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.status(201).json({ ok: true })
  }),
)

export default router
