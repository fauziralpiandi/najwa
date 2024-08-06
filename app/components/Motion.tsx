import React, { ReactNode, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type HaloProps = {
  children: ReactNode | ReactNode[];
  size?: number;
  strength?: number;
  className?: string;
};

export default function Halo({
  children,
  size = 600,
  strength = 10,
  className,
}: HaloProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const offset = size / 2;

  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia('(max-width: 768px)').matches;
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setX(event.clientX - rect.left);
      setY(event.clientY - rect.top);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={clsx('relative h-full w-full overflow-hidden', className)}
      whileHover="hover"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={
          {
            '--x': `${x - offset}px`,
            '--y': `${y - offset}px`,
            width: size,
            height: size,
            background:
              'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)',
          } as React.CSSProperties
        }
        className={`pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity`}
        variants={{
          hover: {
            opacity: isMobile ? 0 : strength / 100,
          },
        }}
      />
      {children}
    </motion.div>
  );
}
