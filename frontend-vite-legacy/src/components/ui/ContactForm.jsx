import { useState } from 'react'
import { sendContactMessage } from '@/lib/api'

const initialForm = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setError('Message failed to send. Please try again or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-zyro-green/30 bg-zyro-surface p-8 text-center"
      >
        <p className="font-display text-xl font-semibold uppercase text-zyro-green">
          Message sent
        </p>
        <p className="mt-2 font-body text-sm text-zyro-ink-dim">
          We'll get back to you within 1–2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="rounded-lg border border-zyro-border bg-zyro-surface px-4 py-3 font-body text-sm text-zyro-ink focus:border-zyro-green focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="rounded-lg border border-zyro-border bg-zyro-surface px-4 py-3 font-body text-sm text-zyro-ink focus:border-zyro-green focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="resize-none rounded-lg border border-zyro-border bg-zyro-surface px-4 py-3 font-body text-sm text-zyro-ink focus:border-zyro-green focus:outline-none"
        />
      </div>
      {status === 'error' && (
        <p role="alert" className="font-body text-sm text-zyro-pink">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start rounded-full bg-zyro-green px-7 py-3.5 font-body text-sm font-semibold text-zyro-bg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
