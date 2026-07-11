import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import rateLimit from 'express-rate-limit'

import productsRouter from './routes/products.js'
import contactRouter from './routes/contact.js'
import newsletterRouter from './routes/newsletter.js'
import adminRouter from './routes/admin.js'
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js'
import { isSupabaseConfigured } from './config/supabase.js'

const app = express()

app.use(helmet())
app.use(compression())
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  }),
)
app.use(express.json({ limit: '1mb' }))

// Generous global limit; tighter limits are applied per-route below for
// public write endpoints (contact/newsletter) that are open to abuse.
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'zyro-backend',
    supabaseConfigured: isSupabaseConfigured,
    time: new Date().toISOString(),
  })
})

// Every route below needs Supabase — fail fast with a clear message instead
// of letting handlers throw on a null client when .env isn't set up yet.
app.use('/api', (req, res, next) => {
  if (!isSupabaseConfigured) {
    return res.status(503).json({
      error:
        'Backend is not connected to Supabase yet. Set SUPABASE_URL, SUPABASE_ANON_KEY, and ' +
        'SUPABASE_SERVICE_ROLE_KEY in backend/node/.env (see backend/node/supabase/README.md).',
    })
  }
  next()
})

app.use('/api/products', productsRouter)
app.use('/api/contact', contactRouter)
app.use('/api/newsletter', newsletterRouter)
app.use('/api/admin', adminRouter)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
