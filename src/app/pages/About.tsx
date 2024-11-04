import Button from '../../components/Button';
import OurStory from '../../components/OurStory';
import CustomerReviews from '../../components/CustomerReviews';
import Reachout from '../../components/Reachout';
import Team from '../../components/Team';

const AboutUs = () => {
  return (
    <section>
      <section className='relative'>
        <img
          src='/hills-trees.jpg'
          alt='Hills and trees'
          className='w-full h-[436px] object-cover'
        />
        <div className=' absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'>
          <div className='container mx-auto max-w-[1728px] flex flex-col justify-center h-full'>
            {' '}
            <p className='font-extrabold text-2xl text-secondary-100'>
              Explore more with us
            </p>
            <h2 className='font-[900] font-REM text-[40px] text-white py-3'>
              About Us
            </h2>
          </div>
        </div>
      </section>
      <section className='py-12 bg-white text-tertiary-600 tracking-wide'>
        <div className='container mx-auto max-w-5xl flex flex-col items-center text-center'>
          <span className=' block w-20 h-[3px] bg-secondary-100 mb-3'></span>
          <h3 className='font-bold font-REM text-[32px] md:w-3/6'>
            Our Commitment to Wildlife Conservation and Community Engagement
          </h3>
          <p className='text-left flex items-start gap-5 py-5'>
            <img
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
        <hr className='container mx-auto my-6 md:w-[1472px] h-px text-gray-200 bg-gray-200 border-0' />
      </section>
      <OurStory />
      <CustomerReviews />
      <Reachout bgColor='#141B34' buttonBorder={false} />
      <Team />
    </section>
  );
};

export default AboutUs;
