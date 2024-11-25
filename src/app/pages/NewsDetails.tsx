import { useParams } from 'react-router-dom';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import { news } from '../../utils/DummyData';

const NewsDetails = () => {
  const { id } = useParams();
  const selectedNews = news.find((item) => item.id === id);

  return (
    <section>
      <HeroSectionHalf title='NEWS  / DETAILS' />
      <section className='py-20'>
        <div className='container mx-auto max-w-[1210px] py-28 text-tertiary-600'>
          <img
            loading='lazy'
            src={selectedNews?.image}
            alt={selectedNews?.image.split('.')[0].slice(1)}
            className='w-full sm:h-[568px]'
          />
          <h3 className='py-5 font-bold font-REM text-[32px]'>
            {selectedNews?.title}
          </h3>
          <p className='opacity-60 leading-loose pb-6'>
            {selectedNews?.text} {selectedNews?.text} {selectedNews?.text}{' '}
            {selectedNews?.text} {selectedNews?.text} {selectedNews?.text}{' '}
            {selectedNews?.text} {selectedNews?.text} {selectedNews?.text}
          </p>
        </div>
      </section>
    </section>
  );
};

export default NewsDetails;
