'use client';
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: ReactNode;
  /** Extra tailwind classes for outer div */
  className?: string;
  /** Distance to move from bottom (px) */
  offsetY?: number;
}

export default function FadeInWhenVisible({ children, className = '', offsetY = 60 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsetY }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
