import { useParams } from 'react-router-dom';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import RecentEvents from '../../components/RecentEvents';
import { events } from '../../utils/DummyData';
import PostCommment from '../../components/PostCommment';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((item) => item.id === id);
  const tags = [
    'Diversity',
    'Wild',
    'Forest',
    'Protection',
    'Awareness',
    'Nature',
    'Species',
    'Beauty',
    'Parks',
  ];

  return (
    <section>
      <HeroSectionHalf title='EVENTS / EVENT DETAILS' />
      <section className='container mx-auto max-w-[1300px] py-20'>
        <div className=' md:flex lg:gap-28 md:gap-16'>
          <div className='md:w-7/12'>
            <img
              loading='lazy'
              src={event?.image}
              alt='A running antelope'
              className='w-full h-auto object-cover'
            />
            <h3 className='py-5 font-bold font-REM text-[32px]'>
              {event?.heading}
            </h3>
            <p className='opacity-60 leading-loose pb-6'>
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
              curae.
            </p>
            <p className='opacity-60 leading-loose'>
              Duis laoreet mattis magna. Nunc quis pellentesque lorem. Curabitur
              convallis efficitur ligula, condimentum interdum nunc sodales nec.
              Fusce vel faucibus lacus. Nunc at turpis porta, suscipit ante at,
              commodo purus. Quisque sagittis imperdiet eros, pretium tempor
              sapien lacinia eget. Aliquam mollis cursus mauris, a vehicula elit
              vulputate nec. In sed lorem nulla. Ut bibendum, risus id
              scelerisque eleifend, mi risus pharetra nisl, venenatis vulputate
              eros ligula condimentum tortor.
            </p>
          </div>
          <div className='lg:w-4/12 md:w-5/12'>
            <RecentEvents />

            <h5 className='font-bold text-xl mt-10 mb-5 text-center'>TAGS</h5>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))]  gap-6'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='flex items-center justify-center h-[58px] font-semibold text-sm bg-tertiary-600 bg-opacity-5'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <PostCommment />
      </section>
    </section>
  );
};

export default EventDetails;
