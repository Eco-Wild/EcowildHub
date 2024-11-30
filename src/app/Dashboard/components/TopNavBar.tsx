import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopNavBar = ({ setIsOpen }: Props) => {
  return (
    <section className='bg-tertiary-600 h-[62px]text-white px-6 max-[768px]:pl-16 py-3 text-white'>
      <button
        className='fixed top-3 left-6 right-0 bottom-0 z-10 w-10 h-10 md:hidden'
        onClick={() => setIsOpen(true)}
      >
        <Icon icon='gg:menu-left' className='w-6 h-6' />
      </button>
      <div className='flex items-center justify-between h-full'>
        <h1 className='font-bold'>Dashboard</h1>
        <div className='inline-flex items-center gap-2'>
          <img
            src='/Khan.jpg'
            alt='Khan'
            className='w-[35px] h-[35px] object-cover rounded-full '
          />
          <span className='font-medium text-xs'>Khan Rugira</span>
        </div>
      </div>
    </section>
  );
};

export default TopNavBar;
