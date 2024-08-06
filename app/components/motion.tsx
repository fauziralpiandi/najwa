import React, { ReactNode, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type AnimasiProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export default function Animasi({ children, className }: AnimasiProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

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
            width: '100px',
            height: '100px',
            background:
              'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 50%)',
            translateX: `${x}px`,
            translateY: `${y}px`,
          } as React.CSSProperties
        }
        className="pointer-events-none absolute inset-0 z-50 opacity-0 transition-opacity"
        variants={{
          hover: {
            opacity: isMobile ? 0 : 0.5,
          },
        }}
      />
      {children}
    </motion.div>
  );
}