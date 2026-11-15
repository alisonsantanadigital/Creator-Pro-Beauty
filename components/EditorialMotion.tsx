'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.12,
} as const;

interface EditorialRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function EditorialReveal({
  children,
  delay = 0,
  y = 14,
  className = '',
}: EditorialRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: 0.45,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
