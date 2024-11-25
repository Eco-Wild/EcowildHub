import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ children }) => {
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
        className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-65 md:inset-0'
      >
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
          }}
          className='container max-w-[708px] max-h-[420px]'
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(Modal);
