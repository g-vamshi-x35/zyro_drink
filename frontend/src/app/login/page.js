import Container from '@/components/ui/Container'
import LoginForm from '@/components/auth/LoginForm'

export const metadata = {
  title: 'Sign In',
  alternates: { canonical: '/login' },
}

export default function LoginPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center py-32">
      <Container className="flex flex-col items-center gap-10">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zyro-green">
            Account
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold uppercase text-zyro-white">
            Welcome Back
          </h1>
        </div>
        <LoginForm />
      </Container>
    </section>
  )
}
