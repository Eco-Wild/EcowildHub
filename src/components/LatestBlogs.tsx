import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const data = [
  {
    image: '/people-at-the-safari.jpg',
    heading: 'Protecting Wildlife for a Sustainable Future',
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/man-and-woman.jpg',
    heading: 'Protecting Wildlife for a Sustainable Future',
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/public/lady-arms-open-on-canopy-walk.jpg',
    heading: 'Protecting Wildlife for a Sustainable Future',
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
];

const LatestBlogs = () => {
  return (
    <section className='relative z-10 bg-white py-16 text-tertiary-600'>
      <div className='container mx-auto max-w-[1728px] flex flex-col items-center text-center'>
        <span className=' block w-20 h-[3px] bg-secondary-100 mb-3'></span>
        <h3 className='text-[32px] font-bold md:max-w-[550px]'>
          Latest Blogs on Wildlife Conservation
        </h3>
        <p className='pt-4 pb-7 max-w-[724px] '>
          Discover our latest blogs that delve into the world of wildlife
          conservation, offering inspiring insights and valuable information for
          eco-conscious readers. Each post explores various topics, from success
          stories of endangered species recovery to innovative conservation
          strategies and the impact of climate change on biodiversity.
        </p>

        <div className='sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full'>
          {data.map((data) => (
            <div key={data.id} className='mb-7 md:mb-0'>
              <img
                src={data.image}
                alt={data.image.split('.')[0].slice(1)}
                className='w-full sm:h-[404px] object-cover'
              />
              <div className='bg-cream-100 px-8 pt-12 pb-14 flex flex-col items-center relative'>
                <span className='flex'>
                  <img
                    src='/calendar-green.svg'
                    alt='A green calendar icon'
                    className='mb-2 mr-1'
                  />
                  {data.date}
                </span>
                <h5 className='md:max-w-[394px] font-bold text-xl pt-3'>
                  {data.heading}
                </h5>
                <button
                  type='button'
                  className='absolute -bottom-7 bg-cream-200 border-[6px] border-white w-14 h-14 rounded-full'
                >
                  <Link to={`/blog/${data.id}/blog-details`}>
                    {' '}
                    <Icon
                      icon='formkit:arrowright'
                      className='ml-[5px] text-white '
                    />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
