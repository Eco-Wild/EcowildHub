import CountUp from 'react-countup';

const stats = [
  { end: 60, suffix: 'K+', name: 'Wild Animals' },
  { end: 1, suffix: 'K+', name: 'Visitors' },
  { end: 5, suffix: 'K+', name: 'Destinations' },
  { end: 50, suffix: '+', name: 'Events' },
];

const EcowildCount = () => {
  return (
    <section className='container mx-auto max-w-[1728px] relative z-10 flex flex-wrap justify-between py-14 text-white'>
      {stats.map((stat, index) => (
        <div key={index} className='flex flex-col items-center'>
          <img
            src='/elephant-icon.svg'
            alt='An elephant icon'
            className='mb-4 mt-8'
          />
          <CountUp
            start={0}
            end={stat.end}
            duration={2.5}
            suffix={stat.suffix}
            className='font-[900] text-7xl py-2 block'
          />
          <span className='block text-lg'>{stat.name}</span>
        </div>
      ))}
    </section>
  );
};

export default EcowildCount;
