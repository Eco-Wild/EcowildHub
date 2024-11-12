import HeroSectionHalf from '../../components/HeroSectionHalf';
import Blog from '../../components/Blog';

const Blogs = () => {
  return (
    <section>
      <HeroSectionHalf title='BLOGS' />
      <section className='container mx-auto max-w-[1728px] bg-cream-100 py-14'>
        <div className='flex flex-col justify-center items-center text-center text-tertiary-600 mb-5'>
          <span
            className='block w-20 h-[3px] bg-secondary-100 mb-3'
            aria-label='A yellow line'
          ></span>
          <h3 className='font-bold font-REM text-[32px] drop-shadow md:w-[601px]'>
            Latest Blogs on Wildlife Conservation
          </h3>
          <p className='md:w-3/6 py-3'>
            Discover our latest blogs that delve into the world of wildlife
            conservation, offering inspiring insights and valuable information
            for eco-conscious readers. Each post explores various topics, from
            success stories of endangered species recovery to innovative
            conservation strategies and the impact of climate change on
            biodiversity.
          </p>
        </div>
        <Blog numToShow={6} />
      </section>
    </section>
  );
};

export default Blogs;
