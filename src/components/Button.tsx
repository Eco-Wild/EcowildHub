import clsx from 'clsx';
import React from 'react';

interface Props {
  bg: string;
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button' | 'reset';

  onClick?: () => void;
}

export const Button = ({ children, type, className, bg, onClick }: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        'h-[54px] font-semibold text-sm px-11 rounded-md',
        bg === 'white'
          ? 'bg-white border-2 border-primary-400 text-primary-400'
          : 'bg-primary-400 text-white',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
