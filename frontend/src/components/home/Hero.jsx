'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
import heroImg from '@/assets/images/hero-green-apple.webp'

export default function Hero() {
  const scope = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '[data-hero-image]',
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 1.4 },
      )
        .fromTo(
          '[data-hero-eyebrow]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=1',
        )
        .fromTo(
          '[data-hero-line]',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=0.3',
        )
        .fromTo(
          '[data-hero-sub]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4',
        )
        .fromTo(
          '[data-hero-cta]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4',
        )
    }, scope)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={scope}
      className="relative isolate flex min-h-[640px] items-center overflow-hidden pt-28 lg:min-h-[820px] lg:pt-24"
    >
      <div data-hero-image className="absolute inset-0 -z-20">
        <Image
          src={heroImg}
          alt="ZYRO Green Apple energy drink can"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] lg:object-center"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-zyro-bg via-zyro-bg/85 to-zyro-bg/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-zyro-bg to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex max-w-xl flex-col gap-6">
          <span
            data-hero-eyebrow
            className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-zyro-green"
          >
            Energy Redefined
          </span>
          <h1 className="font-display text-[15vw] font-semibold uppercase leading-[0.88] tracking-tight text-zyro-white sm:text-[80px] lg:text-[88px]">
            <span data-hero-line className="block overflow-hidden">
              Unlock
            </span>
            <span data-hero-line className="block overflow-hidden text-zyro-green">
              Your Power
            </span>
          </h1>
          <p
            data-hero-sub
            className="max-w-[46ch] font-body text-lg leading-relaxed text-zyro-ink-dim"
          >
            Clean caffeine, zero sugar, and a formula built for calm focus — not a crash. Four
            bold flavors, one can that actually works.
          </p>
          <div data-hero-cta className="flex flex-wrap items-center gap-4 pt-2">
            <Button to="/products">Shop the Range</Button>
            <Button to="/ingredients" variant="outline">
              See What&apos;s Inside
            </Button>
          </div>
          <div data-hero-cta className="flex flex-wrap gap-3 pt-2">
            <Chip>Zero Sugar</Chip>
            <Chip dotColor="zyro-blue">150mg Caffeine</Chip>
            <Chip dotColor="zyro-pink">10 Calories</Chip>
          </div>
        </div>
      </Container>
    </section>
  )
}
