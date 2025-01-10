import clsx from 'clsx';
import { SetStateAction } from 'react';

interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
  className?: string;
}

const TabsHeader = ({ tabs, activeTab, setActiveTab, className }: Props) => {
  return (
    <section className='h-[93px] bg-white'>
      <ul className={clsx('flex items-center gap-20 h-full', className)}>
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
