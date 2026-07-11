'use client'

import { useState } from 'react'
import { subscribeNewsletter } from '@/lib/api'

export default function NewsletterForm({ className }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      await subscribeNewsletter(email.trim())
      setStatus('success')
      setMessage("You're on the list. Watch your inbox.")
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Try again in a moment.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-zyro-border bg-zyro-surface p-1.5 focus-within:border-zyro-green">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="min-w-0 flex-1 bg-transparent px-4 py-2 font-body text-sm text-zyro-ink placeholder:text-zyro-ink-faint focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-full bg-zyro-green px-5 py-2.5 font-body text-sm font-semibold text-zyro-bg transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : 'Join'}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-2 text-xs ${status === 'error' ? 'text-zyro-pink' : 'text-zyro-ink-dim'}`}
      >
        {message}
      </p>
    </form>
  )
}
