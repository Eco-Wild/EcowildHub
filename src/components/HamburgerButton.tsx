import clsx from 'clsx';

interface Props {
  isOpen: boolean;
  handleOpenButton: () => void;
  className: string;
}

const HamburgerButton = ({ handleOpenButton, isOpen, className }: Props) => {
  const genericHamburgerLine = `h-[2px] w-7 my-[3px] rounded-full bg-foundation-primary-normal dark:bg-white transition ease transform duration-300`;

  return (
    <div className={clsx('absolute', className)}>
      <button
        className='group flex h-12 w-12 flex-col items-center justify-center md:hidden'
        onClick={handleOpenButton}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'translate-y-3 rotate-45 opacity-60 dark:opacity-85 group-hover:opacity-100 mb-[10px]'
              : 'opacity-60 dark:opacity-85 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'opacity-0'
              : 'opacity-60 dark:opacity-85 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-translate-y-3 -rotate-45 opacity-60 dark:opacity-85 group-hover:opacity-100'
              : 'opacity-60 dark:opacity-85 group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
};

export default HamburgerButton;
