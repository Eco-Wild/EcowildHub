import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import { news } from '../../utils/DummyData';

const News = () => {
  return (
    <section>
      <HeroSectionHalf title='NEWS' />
      <section className='container mx-auto max-w-[1728px] py-24'>
        <div className='md:px-20  text-tertiary-600'>
          <h3 className='font-bold font-REM text-[32px] mb-4'>
            ECOWILD HUB NEWS
          </h3>
          <p className='opacity-60'>
            Mentin the extp et ex imper fauci lacus many of passages of lorem
            ipsum available alteration in some form. Donec scelerisque dolor id
            nunc dictum, interdum gravida. Ut a luctus elit. Donec ac pharetra
            nisl, vitae tempus dolor. Nulla risus erat, blandit ut cursus id,
            vestibulum ut massa. In ornare id libero vel placerat. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Donec nec ligula vel mauris sodales suscipit. Nunc
            tincidunt est et turpis porta, quis pretium metus dignissim. Ut et
            ex imperdiet, aliquam sapien et, blandit justo. Donec fringilla
            pulvinar urna eget ornare. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae.
          </p>
          <hr className='h-px bg-tertiary-600 opacity-10 border-0 mt-8' />
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 mt-10'>
          {news.map((item) => (
            <div key={item.id}>
              <div className='relative after:absolute after:inset-0 after:bg-black after:opacity-25 after:mix-blend-soft-light rounded-t-xl overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full'
                />

                <div className=' absolute top-0 left-0 flex justify-center items-center h-full w-full'>
                  <div className='flex flex-col gap-20 w-[331px] h-[226px] text-white font-extrabold text-2xl py-5 px-10  border-4 border-white rounded-t-2xl'>
                    <h4 className='border-b-[5px] border-primary-400 leading-relaxed'>
                      ECOWILD HUB NEWS
                    </h4>
                    <span className='block text-primary-400'>2024</span>
                  </div>
                </div>
              </div>
              <div className='p-5 bg-white border border-opacity-50 rounded-b-xl'>
                <h6 className='font-bold text-xl py-2'>{item.title}</h6>
                <p className='opacity-50'>{item.text}</p>
                <div className='mt-6'>
                  <Button type='button' bg='green'>
                    <Link to={`/news/${item.id}/news-details`}>Read More</Link>
                  </Button>
                  <span className='inline-block ml-20 opacity-50'>
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default News;
