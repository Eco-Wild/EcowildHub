const data = [
  {
    image: '/sable-antelope.jpg',
    heading: 'The Wild Update: Conservation News & Insights',
    author: {
      image: './profile-pic.svg',
      name: 'Jackson Malik',
    },
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/zebras.jpg',
    heading: 'The Wild Update: Conservation News & Insights',
    author: {
      image: './profile-pic.svg',
      name: 'Jackson Malik',
    },
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/gorilla.jpg',
    heading: 'The Wild Update: Conservation News & Insights',
    author: {
      image: './profile-pic.svg',
      name: 'Jackson Malik',
    },
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/lions.jpg',
    heading: 'The Wild Update: Conservation News & Insights',
    author: {
      image: './profile-pic.svg',
      name: 'Jackson Malik',
    },
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/monkeys.jpg',
    heading: 'The Wild Update: Conservation News & Insights',
    author: {
      image: './profile-pic.svg',
      name: 'Jackson Malik',
    },
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/elephants.jpg',
    heading: 'The Wild Update: Conservation News & Insights',
    author: {
      image: './profile-pic.svg',
      name: 'Jackson Malik',
    },
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
];

const LastestNews = () => {
  return (
    <section className=' relative z-10 bg-cream-100 py-16 text-tertiary-600'>
      <div className='container mx-auto max-w-6xl'>
        <span className='block w-20 h-[3px] bg-secondary-100 mb-3'></span>
        <h3 className='font-bold text-[32px] text-tertiary-600'>LATEST NEWS</h3>
        <p className='pt-4 pb-6'>
          Stay updated with the latest developments in wildlife conservation
          through EcoWildHub! From successful conservation projects and habitat
          restoration efforts to new partnerships with global environmental
          organizations, our platform brings you the most current news in the
          fight to protect endangered species.{' '}
        </p>
        <div className='md:grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-7'>
          {data.map((data) => (
            <div className='mb-5 md:mb-0' key={data.id}>
              <img
                src={data.image}
                alt={data.image.split('.')[0].slice(1)}
                className='w-full h-[325px] object-cover'
              />
              <div className='bg-white p-7 drop-shadow-md'>
                <h5 className='text-xl font-extrabold pb-4'>{data.heading}</h5>

                <div className='flex items-center'>
                  <span className='flex-1 flex items-center text-xs'>
                    <img
                      src={data.author.image}
                      alt={data.author.name}
                      className='mr-1 w-6 h-6'
                    />
                    {data.author.name}
                  </span>
                  <span className='flex-1 flex items-center text-xs text-[#141B34B2]'>
                    <img
                      src='/calendar-gray.svg'
                      alt='A gray calendar icon'
                      className='mr-1'
                    />
                    {data.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type='button'
          className='h-[58px] mt-8 px-10 rounded-md bg-primary-400 text-white text-sm hover:bg-opacity-90'
        >
          READ ALL CONSERVATION NEWS
        </button>
      </div>
    </section>
  );
};

export default LastestNews;
