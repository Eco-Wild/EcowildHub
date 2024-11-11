import OurStory from '../../components/OurStory';
import CustomerReviews from '../../components/CustomerReviews';
import Reachout from '../../components/Reachout';
import Team from '../../components/Team';
import HeroSectionHalf from '../../components/HeroSectionHalf';

const AboutUs = () => {
  return (
    <section>
      <HeroSectionHalf
        src='/hills-trees.jpg'
        title='ABOUT US'
        explore='Explore more with us'
        alt='Hills and trees'
      />
      <section className='py-12 bg-white text-tertiary-600 tracking-wide'>
        <div className='container mx-auto max-w-5xl flex flex-col items-center text-center'>
          <span className=' block w-20 h-[3px] bg-secondary-100 mb-3'></span>
          <h3 className='font-bold font-REM text-[32px] md:w-3/6'>
            Our Commitment to Wildlife Conservation and Community Engagement
          </h3>
          <p className='text-left flex items-start gap-5 py-5'>
            <img
              loading='lazy'
              src='/calendar-yellow.svg'
              alt='A yellow calendar icon'
              className=''
            />
            EcoWildHub is a Rwanda-based platform dedicated to wildlife
            conservation and environmental sustainability. It engages
            communities and eco-conscious individuals through educational
            content and interactive initiatives, raising awareness and
            encouraging action to protect biodiversity. With the goal of global
            expansion, EcoWildHub connects people to conservation efforts,
            empowering them to learn, participate in events, and contribute to
            building a future where nature and humanity coexist harmoniously
          </p>
          <h5 className='font-extrabold py-2'>
            Help us to protect wildlife around the world.
          </h5>
        </div>
        <hr className='container mx-auto my-6 md:w-[1472px] h-px text-gray-200 bg-tertiary-600 opacity-10 border-0' />
      </section>
      <OurStory />
      <CustomerReviews />
      <Reachout bgColor='#141B34' buttonBorder={false} />
      <Team />
    </section>
  );
};

export default AboutUs;
