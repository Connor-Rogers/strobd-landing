'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SIGNUP_URL } from '@/lib/constants';
import { motion, staggerContainer, fadeUpItem } from '@/components/brand/motion';
import { useReducedMotion } from 'motion/react';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated gradient background */}
      <div
        className="animate-gradient absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.10 0.012 265) 0%, oklch(0.07 0.01 280) 25%, oklch(0.13 0.015 250) 50%, oklch(0.09 0.008 270) 75%, oklch(0.11 0.012 260) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, oklch(0.06 0.008 265 / 0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Video placeholder — swap src when brand video is ready */}
      {/*
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      */}

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={shouldReduceMotion ? undefined : fadeUpItem}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-white/60 uppercase backdrop-blur-sm">
            For photographers &amp; creative professionals
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={shouldReduceMotion ? undefined : fadeUpItem}
          className="mt-4 text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Publish. Proof.
          <br />
          <span className="text-white/60">Get Paid. Deliver.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={shouldReduceMotion ? undefined : fadeUpItem}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl"
        >
          The all-in-one platform to build your brand, share galleries with clients, collect
          payments, and deliver files — all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUpItem}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="active:scale-[0.97] min-w-48 bg-white text-black font-semibold hover:bg-white/90 transition-all duration-200 h-12 px-8 text-sm tracking-wide"
          >
            <a href={SIGNUP_URL}>Get Started Free</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="active:scale-[0.97] min-w-48 border-white/25 bg-white/8 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-200 h-12 px-8 text-sm tracking-wide"
          >
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          variants={shouldReduceMotion ? undefined : fadeUpItem}
          className="mt-8 text-xs text-white/30 tracking-wider"
        >
          Free to start &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Your own domain
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#features"
          aria-label="Scroll to features"
          className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
