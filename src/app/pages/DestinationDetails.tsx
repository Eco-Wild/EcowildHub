import { useParams } from 'react-router-dom';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import { destinations } from '../../utils/DummyData';
import { range } from '../../utils/HelperFunctions';
import { Icon } from '@iconify/react/dist/iconify.js';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((destination) => destination.id === id);
  return (
    <section>
      <HeroSectionHalf title='DESTINATIONS / OUR DESTINATIONS' />
      <div className='py-32'>
        <section className='container mx-auto max-w-[1438px] text-tertiary-600'>
          <img
            src={destination?.image}
            alt={destination?.name}
            className='w-full md:h-[568px] object-cover'
          />
          <div className='flex justify-between  max-w-[1438px] space-x-6 overflow-scroll my-10'>
            {range(4).map((num) => (
              <div key={num} className='relative'>
                <img
                  src={destination?.image}
                  alt={destination?.name}
                  className='w-full h-auto object-contain'
                />
                <div className='absolute left-3 bottom-3 text-xl text-white'>
                  <span className='flex items-center gap-2 opacity-50'>
                    <Icon icon='fluent:location-20-regular' />
                    {destination?.location}
                  </span>
                  <h6>{destination?.name}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className='px-7'>
            <h3 className='font-bold font-REM text-[32px] mb-4'>
              Beautiful view at Radisson blue hotel
            </h3>
            <p className='opacity-60'>
              Mentin the extp et ex imper fauci lacus many of passages of lorem
              ipsum available alteration in some form. Donec scelerisque dolor
              id nunc dictum, interdum gravida. Ut a luctus elit. Donec ac
              pharetra nisl, vitae tempus dolor. Nulla risus erat, blandit ut
              cursus id, vestibulum ut massa. In ornare id libero vel placerat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec nec ligula vel mauris
              sodales suscipit. Nunc tincidunt est et turpis porta, quis pretium
              metus dignissim. Ut et ex imperdiet, aliquam sapien et, blandit
              justo. Donec fringilla pulvinar urna eget ornare. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae. Duis laoreet mattis magna. Nunc quis pellentesque lorem.
              Curabitur convallis efficitur ligula, condimentum interdum nunc
              sodales nec. Fusce vel faucibus lacus. Nunc at turpis porta,
              suscipit ante at, commodo purus. Quisque sagittis imperdiet eros,
              pretium tempor sapien lacinia eget. Aliquam mollis cursus mauris,
              a vehicula elit vulputate nec. In sed lorem nulla. Ut bibendum,
              risus id scelerisque eleifend, mi risus pharetra nisl, venenatis
              vulputate eros ligula condimentum tortor.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DestinationDetails;
