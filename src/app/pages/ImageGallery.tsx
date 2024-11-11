import Carousel from '../../components/Carousel';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import { range } from '../../utils/HelperFunctions';

const animals = [
  '/girraffe.jpg',
  '/​rainbow-lorikeet.jpg',
  '/monkeys.jpg',
  '/rhino.jpg',
  '/​rainbow-lorikeet.jpg',
];

const ImageGallery = () => {
  return (
    <section>
      <HeroSectionHalf title='Gallery' />
      <section className='container mx-auto max-w-[1728px] py-16'>
        {range(4).map((num) => (
          <div key={num}>
            <h3 className='font-bold text-2xl py-3'>ECOWILD GALLERY</h3>
            <Carousel animals={animals} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ImageGallery;
