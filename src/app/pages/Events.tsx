import HeroSectionHalf from '../../components/HeroSectionHalf';
import LatestNews from '../../components/LatestNews';

const Events = () => {
  return (
    <section>
      <HeroSectionHalf title='EVENTS' />

      <LatestNews bg='bg-white' button={false} />
    </section>
  );
};

export default Events;
