const data = [
  {
    image: '/gorilla2.jpg',
    heading: 'Protecting Wildlife for a Sustainable Future',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
  {
    image: '/man-and-woman2.jpg',
    heading: 'Protecting Wildlife for a Sustainable Future',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '2 weeks ago',
    id: crypto.randomUUID(),
  },
];

const UpcomingEvents = () => {
  return (
    <section className='relative z-10 text-tertiary-600'>
      <div className='md:flex md:space-x-24  bg-white'>
        <div className='flex-1'>
          <img
            loading='lazy'
            src='/big-gorilla.jpg'
            alt='A big gorilla'
            className=' w-full h-full'
          />
        </div>
        <div className='flex-1 self-center justify-self-center p-6'>
          <div className='mb-8'>
            <span
              className='block w-20 h-[3px] bg-secondary-100 mb-3'
              aria-label='A yellow line'
            ></span>
            <h3 className='font-bold text-[32px]'>UPCOMING EVENTS</h3>
          </div>
          <div>
            {data.map((data) => (
              <div key={data.id} className='lg:flex gap-x-16 mb-10'>
                <div className='relative'>
                  <img
                    loading='lazy'
                    src={data.image}
                    alt={data.image.split('.')[0].slice(1)}
                    className='w-full h-full object-cover mb-2 lg:mb-0'
                  />
                  <div className='absolute bottom-0 right-0'>
                    <span className='flex flex-col justify-center items-center w-[78px] h-[74px] font-[900] text-xl text-white bg-secondary-100'>
                      05 <span className='block'>Dec</span>
                    </span>
                  </div>
                </div>
                <div className='flex-1'>
                  <img
                    loading='lazy'
                    src='/calendar-green.svg'
                    alt='A green calendar icon'
                    className='inline-block align-top mr-1'
                  />
                  <span>{data.date}</span>
                  <h6 className='text-xl font-bold my-2'>{data.heading}</h6>
                  <p className='text-sm opacity-80'>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
