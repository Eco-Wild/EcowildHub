import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { events } from '../utils/DummyData';

interface Props {
  className?: string;
  bg?: string;
  button: boolean;
}

const LatestNews = ({
  className,
  bg = 'bg-cream-100',
  button = true,
}: Props) => {
  return (
    <section
      className={clsx('relative z-10 py-16 text-tertiary-600', className, bg)}
    >
      <div className='container mx-auto max-w-6xl'>
        <span
          className='block w-20 h-[3px] bg-secondary-100 mb-3'
          aria-label='A yellow line'
        ></span>
        <h3 className='font-bold text-[32px] text-tertiary-600'>LATEST NEWS</h3>
        <p className='pt-4 pb-6'>
          Stay updated with the latest developments in wildlife conservation
          through EcoWildHub! From successful conservation projects and habitat
          restoration efforts to new partnerships with global environmental
          organizations, our platform brings you the most current news in the
          fight to protect endangered species.{' '}
        </p>
        <div className='md:grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-7'>
          {events.map((data) => (
            <div
              className='mb-5 md:mb-0 hover:drop-shadow-lg transition-all duration-300 ease-in'
              key={data.id}
            >
              <Link to={`${data.id}/event-details`}>
                <img
                  loading='lazy'
                  src={data.image}
                  alt={data.image.split('.')[0].slice(1)}
                  className='w-full h-[325px] object-cover'
                />
                <div className='bg-white p-7 drop-shadow-md'>
                  <h5 className='text-xl font-extrabold pb-4'>
                    {data.heading}
                  </h5>

                  <div className='flex items-center'>
                    <span className='flex-1 flex items-center text-xs'>
                      <img
                        loading='lazy'
                        src={data.author.image}
                        alt={data.author.name}
                        className='mr-1 w-6 h-6'
                      />
                      {data.author.name}
                    </span>
                    <span className='flex-1 flex items-center text-xs text-[#141B34B2]'>
                      <img
                        loading='lazy'
                        src='/calendar-gray.svg'
                        alt='A gray calendar icon'
                        className='mr-1'
                      />
                      {data.date}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {button && (
          <button
            type='button'
            className='h-[58px] mt-8 px-10 rounded-md bg-primary-400 text-white text-sm hover:bg-opacity-90'
          >
            READ ALL CONSERVATION NEWS
          </button>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
