import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';

interface Props {
  className?: string;
}

const SearchFilter = ({ className }: Props) => {
  return (
    <div className={clsx('flex gap-6', className)}>
      <div className='flex-1 relative text-tertiary-400 opacity-50'>
        <input
          type='text'
          placeholder='Search by title, date, author'
          className='w-full sm:w-[455px] h-11 px-8 rounded-xl border border-gray-400 placeholder:text-xs placeholder:text-tertiary-400 placeholder:opacity-50 bg-transparent'
        />
        <Icon
          icon='charm:search'
          className='w-4 h-4 absolute inset-y-[15px] left-2'
        />
      </div>

      <div className='flex-1'>
        <button
          type='button'
          className='flex items-center justify-center w-[49px] h-10 rounded-lg border border-tertiary-400'
        >
          <Icon icon='mage:filter-fill' className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
