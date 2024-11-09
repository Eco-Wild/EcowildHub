import Blog from './Blog';

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

        <Blog bgColor='#FFFDD0' />
      </div>
    </section>
  );
};

export default LatestBlogs;
