import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: object;
  initial?: string;
  animate?: string;
  transition?: object;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variants,
  initial = "hidden",
  animate = "visible",
  transition,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
