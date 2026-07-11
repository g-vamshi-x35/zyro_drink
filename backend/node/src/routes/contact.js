import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { supabaseAdmin } from '../config/supabase.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = Router()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages sent. Please try again later.' },
})

router.post(
  '/',
  contactLimiter,
  asyncHandler(async (req, res) => {
    const { name, email, message } = req.body || {}

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'name, email, and message are required' })
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    const { error } = await supabaseAdmin.from('contact_messages').insert({
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 200),
      message: message.trim().slice(0, 5000),
    })

    if (error) throw Object.assign(new Error(error.message), { status: 500 })
    res.status(201).json({ ok: true })
  }),
)

export default router
