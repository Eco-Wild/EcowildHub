import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { SetStateAction, useState } from 'react';
import Dropdown from '../../../components/Dropdown';

interface Props {
  className?: string;
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilter = ({
  className,
  searchValue,
  setSearchValue,
  setSelectedFilter,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option);
  };

  const items = [
    {
      name: 'All',
    },
    { name: 'Date' },
    { name: 'Author' },
  ];

  return (
    <div className={clsx('flex gap-6', className)}>
      <div className='flex-1 relative text-tertiary-400 opacity-50'>
        <input
          type='text'
          value={searchValue}
          placeholder='Search by title, date, author'
          onChange={(e) => setSearchValue(e.target.value)}
          className='w-full sm:w-[455px] h-11 px-8 rounded-xl outline-none border focus-within:border-gray-500 border-gray-400 placeholder:text-xs placeholder:text-tertiary-400 placeholder:opacity-50 bg-transparent'
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
          onClick={() => setIsDropdownOpen(true)}
        >
          <Icon icon='mage:filter-fill' className='w-4 h-4' />
        </button>
        {isDropdownOpen && (
          <Dropdown
            items={items}
            onSelect={handleFilterSelect}
            onClose={() => setIsDropdownOpen(false)}
            className='top-56 w-[119px] h-[133px]'
          />
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
