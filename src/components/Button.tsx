import clsx from 'clsx';
import React from 'react';

interface Props {
  bg: string;
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  type,
  className = 'font-semibold',
  bg,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        'h-[54px]  text-sm px-10 rounded-md text-nowrap',
        bg === 'white'
          ? 'bg-white border-2 border-primary-400 text-primary-400 hover:bg-green-50'
          : 'bg-primary-400 text-white hover:opacity-85',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
