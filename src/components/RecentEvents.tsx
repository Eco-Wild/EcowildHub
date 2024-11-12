import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { blogs } from '../utils/DummyData';

const RecentEvent = () => {
  const [value, setValue] = useState('');
  const searchedEvents = blogs.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  const events = searchedEvents.length > 0 ? searchedEvents : blogs;

  console.log(searchedEvents);

  return (
    <section>
      <div className='relative text-white mt-8 lg:mt-0'>
        <input
          type='text'
          value={value}
          placeholder='Search'
          className='bg-cream-200 px-6 w-full h-[60px] placeholder:text-white outline-none'
          onChange={(e) => setValue(e.target.value)}
        />
        <Icon
          icon='ion:search'
          className='absolute inset-y-4 right-3 w-6 h-6'
        />
      </div>
      <div className='text-tertiary-600 max-h-[520px] mt-8 overflow-x-scroll'>
        <h4 className='font-extrabold font-REM text-xl mb-3 underline'>
          {value ? 'SEARCHED EVENTS' : 'RECENT EVENTS'}
        </h4>
        <div className='flex flex-col space-y-6'>
          {events.map((event) => (
            <div key={event.id} className='flex'>
              <div className='flex-1'>
                <img
                  loading='lazy'
                  src={event.image}
                  alt={event.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex-1 bg-cream-100 p-6'>
                <div className='flex flex-col justify-center h-full'>
                  <span className='flex items-center gap-2 text-sm'>
                    <img
                      loading='lazy'
                      src='/calendar-green.svg'
                      alt='A green calendar icon'
                    />
                    {event.date}
                  </span>
                  <h6 className='font-bold font-REM mt-3'>{event.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvent;
