import { useState } from 'react';
import TabsHeader from '../components/TabsHeader';
import Button from '../components/Button';
import { Icon } from '@iconify/react/dist/iconify.js';

const Media = () => {
  const tabs = ['Images', 'Videos'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className=''>
      <section className='flex justify-between px-6 bg-white'>
        <TabsHeader
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Button
          type='button'
          bg='green'
          className='flex items-center justify-center gap-2 h-[66px] w-full max-w-[199px] rounded-[5px] font-semibold'
        >
          <Icon icon='mingcute:add-fill' className='' />
          Add {activeTab}
        </Button>
      </section>
    </section>
  );
};

export default Media;
