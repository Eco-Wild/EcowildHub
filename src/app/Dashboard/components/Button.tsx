import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  bg?: string;
}

const Button = ({ children, type, bg = 'green' }: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        'h-[55px] w-full rounded-[4px] font-extrabold text-sm my-2',
        bg === 'green'
          ? 'bg-primary-400 text-white'
          : 'bg-white border border-primary-400 text-black'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
