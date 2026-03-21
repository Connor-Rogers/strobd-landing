'use client';

import { useReducedMotion } from 'motion/react';
import { motion } from '@/components/brand/motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = 24;
  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
        x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
      };

  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
