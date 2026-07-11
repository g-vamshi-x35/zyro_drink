'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient'

export default function LoginForm() {
  const router = useRouter()
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | error
  const [error, setError] = useState('')
  const [signupSent, setSignupSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    if (!isSupabaseConfigured) {
      setStatus('error')
      setError('Sign-in is not configured yet. Set up Supabase credentials to enable accounts.')
      return
    }

    if (mode === 'signin') {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
      if (signInError) {
        setStatus('error')
        setError(signInError.message)
        return
      }
      router.push('/')
      router.refresh()
      return
    }

    const { error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) {
      setStatus('error')
      setError(signUpError.message)
      return
    }
    setStatus('idle')
    setSignupSent(true)
  }

  if (signupSent) {
    return (
      <div role="status" className="rounded-2xl border border-zyro-green/30 bg-zyro-surface p-8 text-center">
        <p className="font-display text-xl font-semibold uppercase text-zyro-green">
          Check your email
        </p>
        <p className="mt-2 font-body text-sm text-zyro-ink-dim">
          We sent a confirmation link to {email}. Confirm your address, then sign in.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 flex gap-6 border-b border-zyro-border">
        <button
          type="button"
          onClick={() => setMode('signin')}
          className={`pb-3 font-mono text-xs uppercase tracking-wider ${
            mode === 'signin'
              ? 'border-b-2 border-zyro-green text-zyro-green'
              : 'text-zyro-ink-faint'
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setMode('signup')}
          className={`pb-3 font-mono text-xs uppercase tracking-wider ${
            mode === 'signup'
              ? 'border-b-2 border-zyro-green text-zyro-green'
              : 'text-zyro-ink-faint'
          }`}
        >
          Create Account
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="login-email" className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-zyro-border bg-zyro-surface px-4 py-3 font-body text-sm text-zyro-ink focus:border-zyro-green focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="login-password" className="font-mono text-xs uppercase tracking-wider text-zyro-ink-faint">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            required
            minLength={6}
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border border-zyro-border bg-zyro-surface px-4 py-3 font-body text-sm text-zyro-ink focus:border-zyro-green focus:outline-none"
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
          className="rounded-full bg-zyro-green px-7 py-3.5 font-body text-sm font-semibold text-zyro-bg transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'loading'
            ? 'Please wait…'
            : mode === 'signin'
              ? 'Sign In'
              : 'Create Account'}
        </button>
      </form>
    </div>
  )
}
