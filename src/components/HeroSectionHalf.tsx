interface Props {
  src?: string;
  title: string;
  explore?: string;
  alt?: string;
}

const HeroSectionHalf = ({
  src = '/elephants2.jpg',
  title,
  explore = 'Explore Our Destinations',
  alt = 'Two elephants and the sunset',
}: Props) => {
  return (
    <section className='relative'>
      <img src={src} alt={alt} className='w-full h-[436px] object-cover' />
      <div className=' absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'>
        <div className='container mx-auto max-w-[1728px] flex flex-col justify-center h-full'>
          {' '}
          <p className='font-extrabold text-2xl text-secondary-100'>
            {explore}
          </p>
          <h2 className='font-[900] font-REM text-[40px] text-white py-3'>
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHalf;
