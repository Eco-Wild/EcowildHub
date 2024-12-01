import { Icon } from '@iconify/react/dist/iconify.js';

const CountCard = () => {
  const cardData = [
    { title: 'Newsletter', count: 250 },
    { title: 'Blogs', count: 250 },
    { title: 'Media', count: 250 },
    { title: 'Events', count: 250 },
  ];

  return (
    <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 pb-5 text-tertiary-400 font-Montserrat'>
      {cardData.map((data, index) => (
        <div
          key={index}
          className='flex justify-center items-center gap-5 divide-x-2 divide-gray-300  w-full h-[120px] bg-white rounded-xl border-l-[5px] border-primary-400'
        >
          {' '}
          <Icon
            icon='hugeicons:settings-03'
            className='w-10 h-10 text-primary-400'
          />
          <div key={index} className='pl-7'>
            <span className='block font-medium text-sm'>{data.title}</span>
            <span className='block font-bold text-xl mt-2'>{data.count}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CountCard;
