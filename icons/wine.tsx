'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';

const glassVariants: Variants = {
  normal: {
    x: 0,
  },
  animate: {
    x: [0, -3, 2, -2, 1, 0],
    transition: {
      duration: 1.5,
    },
  },
};

const wineVariants: Variants = {
  normal: {
    d: 'M7.5 10h9',
  },
  animate: {
    d: [
      'M7.5 10h9',
      'M7.5 9 Q12 10 16.5 11',
      'M7.5 11 Q12 10 16.5 9',
      'M7.5 9.5 Q12 10 16.5 10.5',
      'M7.5 10.5 Q12 10 16.5 9.5',
      'M7.5 10h9',
    ],
    transition: {
      duration: 1.5,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: 'easeOut',
      type: 'tween',
      repeatType: 'reverse',
      repeatDelay: 0,
    },
  },
};

const WineIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g variants={glassVariants} animate={controls}>
          <path d="M8 22h8" />
          <motion.path
            variants={wineVariants}
            animate={controls}
            d="M7.5 10h9"
          />
          <path d="M12 15v7" />
          <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
        </motion.g>
      </svg>
    </div>
  );
};
export { WineIcon };
