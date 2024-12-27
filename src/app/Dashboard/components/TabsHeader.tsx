import clsx from 'clsx';
import { SetStateAction } from 'react';

interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
}

const TabsHeader = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <section className='h-[93px] bg-white'>
      <ul className='flex items-center gap-20 h-full p-6'>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={clsx(
              'py-1 px-5 text-tertiary-600 cursor-pointer',
              tab === activeTab
                ? 'border-b-[3px] border-primary-400 opacity-100'
                : 'opacity-70'
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TabsHeader;
