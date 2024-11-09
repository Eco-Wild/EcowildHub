import { Icon } from '@iconify/react/dist/iconify.js';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { destinations } from '../../utils/DummyData';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
// import clsx from 'clsx';

const Destinations = () => {
  return (
    <section className='relative'>
      <HeroSectionHalf title='DESTINATIONS' explore='HOME - DESTINATIONS' />
      <div className='container mx-auto max-w-[1728px]'>
        <section className='relative -top-10 h-[130px] p-6 bg-white drop-shadow-md rounded-[5px] text-tertiary-600'>
          <h6 className='font-bold text-sm text-tertiary-600'>Destinations</h6>
          <div className='relative'>
            <div className='flex items-center gap-4 mt-2'>
              <input
                type='text'
                name='search'
                id='search'
                placeholder='Where to go?'
                className='w-full h-[58px] px-12 border border-gray-300 rounded-[5px] outline-none placeholder:opacity-20 focus:border-gray-400'
              />
              <Button type='button' bg='green' className='xs:block hidden'>
                Search
              </Button>
            </div>
            <Icon
              icon='hugeicons:sent'
              className='absolute inset-y-4 left-3 w-6 h-6 text-tertiary-600 opacity-20'
            />
          </div>
        </section>
        <section className='pt-12 pb-32'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 3, 950: 4 }}
          >
            <Masonry gutter='20px'>
              {destinations.map((destination) => (
                <div key={destination.id} className='relative'>
                  <Link
                    to={`/destinations/${destination.id}/destination-details`}
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className='w-full h-auto object-contain'
                    />
                    <div className='absolute left-3 bottom-3 text-xl text-white'>
                      <span className='flex items-center gap-2 opacity-50'>
                        <Icon icon='fluent:location-20-regular' />
                        {destination.location}
                      </span>
                      <h6>{destination.name}</h6>
                    </div>
                  </Link>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      </div>
    </section>
  );
};

export default Destinations;
