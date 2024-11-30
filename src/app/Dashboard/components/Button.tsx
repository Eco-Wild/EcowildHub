import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <button type='button' className={clsx('h-[55px] rounded-[4px]', className)}>
      {children}
    </button>
  );
};

export default Button;
