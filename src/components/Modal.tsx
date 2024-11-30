import React, { FC, memo } from 'react';
import {
  AnimationControls,
  motion,
  Target,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
interface Props {
  children: React.ReactNode;
  animation?: {
    initial?: boolean | VariantLabels | Target | undefined;
    animate?:
      | boolean
      | VariantLabels
      | AnimationControls
      | TargetAndTransition
      | undefined;
    exit?: VariantLabels | TargetAndTransition | undefined;
    transition?: Transition;
  };
  className?: string;
}

const defaultVal = {
  initial: { y: '-100%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '100%' },
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
    type: 'spring',
    stiffness: 100,
  },
};

const Modal: FC<Props> = ({
  children,
  animation = defaultVal,
  className = 'bg-opacity-65',
}) => {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.3,
        delayChildren: 0.4,
        // staggerDirection: -1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        duration: 0.3,
        delay: 0.4,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={overlayVariants}
        className={clsx('fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black md:inset-0', className)}
      >
        <motion.div
          initial={animation?.initial}
          animate={animation?.animate}
          exit={animation?.exit}
          transition={animation?.transition}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(Modal);
