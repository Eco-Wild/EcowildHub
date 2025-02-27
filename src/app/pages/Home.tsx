import { Link } from 'react-router-dom';
import Carousel from '../../components/HeroCarousel';
import Button from '../../components/Button';
import LatestNews from '../../components/LatestNews';
import UpcomingEvents from '../../components/UpcomingEvents';
import EcowildCount from '../../components/CountUp';
import LatestBlogs from '../../components/LatestBlogs';
import useScrollToTop from '../../hooks/useScrollToTop';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Reachout from '../../components/Reachout';

const offers = [
  {
    heading: 'NEW EVENTS',
    text: 'Wildlife conservation events focus on raising awareness, promoting action, and\
     supporting initiatives to protect endangered species and habitats.',
  },
  {
    heading: 'NEW BLOGS',
    text: 'Wildlife conservation blogs provide updates on efforts to protect endangered species and\
    ecosystems, share success stories, and explore emerging challenges.',
  },
  {
    heading: 'DESTINATIONS',
    text: 'Wildlife conservation destinations are natural areas like national parks, reserves, and\
    sanctuaries where visitors can experience nature while supporting conservation efforts. ',
  },
];

const aboutEcowild = [
  {
    heading: 'ABOUT US',
    text: 'EcoWildHub is a Rwanda-based platform dedicated to wildlife conservation and environmental sustainability.\
     It engages communities and eco-conscious individuals through educational content and interactive initiatives, raising\
      awareness and encouraging action to protect biodiversity.',
  },
  {
    heading: 'OUR MISSION',
    text: 'To promote wildlife conservation by providing engaging content and interactive experiences, including blogs, news,\
     and events, while empowering communities to learn, participate, and contribute to conservation efforts.',
  },
  {
    heading: 'OUR VISION',
    text: 'To create a world where people and nature coexist in harmony, driven by community empowerment, innovative conservation\
     solutions, and a global commitment to protecting biodiversity and combating climate change—ensuring that everyone, including\
      communities and ecosystems, benefits from a sustainable and thriving environment.',
  },
];

const animals = [
  '/wolf.jpg',
  '/lion.jpg',
  '/tiger1.jpg',
  '/tiger2.jpg',
  '/penguine.jpg',
];
const destinations = [
  '/people-at-the-safari.jpg',
  '/building.jpg',
  'room-lodge.jpg',
  '/people-at-the-safari2.jpg',
];

const Home = () => {
  const showScrollButton = useScrollToTop();

  return (
    <div>
      <main>
        <Carousel />
        <section className='bg-tertiary-600'>
          <div className='container mx-auto max-w-[1728px] md:flex justify-between gap-6 md:py-0 py-10 '>
            {offers.map((offer, index) => (
              <div
                key={index}
                className='flex-1 flex justify-center space-x-5 md:py-12 my-6 pr-2 md:border-r border-[#5a5f71] last:border-r-0'
              >
                <img
                  loading='lazy'
                  src='/calendar-yellow.svg'
                  alt='A yellow calendar icon'
                  className='w-12 h-12'
                />
                <div>
                  <h5 className='font-extrabold text-xl text-white '>
                    {offer.heading}
                  </h5>
                  <p className='text-sm text-[#5a5f71] leading-relaxed py-2'>
                    {offer.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='container mx-auto max-w-[1728px] lg:pt-44 lg:pb-36 pt-32 pb-28'>
          <div className='md:flex lg:space-x-52 md:space-x-16'>
            <div className='flex-1 relative'>
              <img
                loading='lazy'
                src={'/people-on-canopy-walk.jpg'}
                alt='Man and woman taking pictures on canopy walk'
                className='w-full h-full'
              />
              <img
                loading='lazy'
                src='/monkey.jpg'
                alt=''
                className='absolute top-24 lg:-right-36 lg:block hidden'
              />
            </div>
            <div className='flex-1 lg:-mt-24 pt-8 lg:pt-0 text-tertiary-600 border-b border-gray-200'>
              <span className='block w-20 h-[3px] bg-secondary-100'></span>
              <h2 className='pt-4 pb-7 font-bold text-[32px]'>
                Uniting Communities for Wildlife Conservation and Sustainability
              </h2>
              {aboutEcowild.map((data, index) => (
                <div key={index} className='my-9'>
                  <div className='flex space-x-5'>
                    <img
                      loading='lazy'
                      src='/calendar-yellow.svg'
                      alt='A yellow calendar icon'
                      className='w-12 h-12'
                    />
                    <div className=''>
                      {' '}
                      <h6 className='font-extrabold text-xl'>{data.heading}</h6>
                      <p className='pt-2 text-sm'>{data.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{' '}
          <div className='md:flex justify-end mt-12 ml-16 w-8/12'>
            <Button type='button' bg='green'>
              <Link to='./about-us'>Read More</Link>
            </Button>
          </div>
        </section>
        <section>
          <div className='container mx-auto max-w-6xl flex flex-col items-center text-center  text-tertiary-600'>
            <span
              className='block w-20 h-[3px] bg-secondary-100 mb-3'
              aria-label='A yellow line'
            ></span>
            <h3 className='font-bold text-[32px] md:w-3/6'>
              Exploring Rwanda's Rich Animal Diversity
            </h3>
            <p className='mt-3 mb-5'>
              Rwanda is home to an incredible array of wildlife, from the iconic
              mountain gorillas of Volcanoes National Park to the majestic
              elephants and lions in Akagera National Park. The country’s
              diverse landscapes ranging from rainforests and savannahs to
              wetlands and lakes support a wide variety of species, including
              primates, large mammals, birds, and reptiles. Rwanda's commitment
              to conservation has helped protect its biodiversity, offering
              visitors a unique opportunity to witness some of the world’s most
              remarkable animals in their natural habitats.
            </p>
          </div>
          <div className='sm:flex space-x-0.5'>
            {animals.map((animal, index) => (
              <div
                key={index}
                className='flex-1 my-3 origin-top sm:hover:scale-y-[1.04] transition-transform duration-150 ease-in'
              >
                <img
                  loading='lazy'
                  src={animal}
                  alt={animal.split('.')[0].slice(1)}
                  className='w-full h-auto '
                />
              </div>
            ))}
          </div>
        </section>
        <section className='sticky top-0 z-0 mt-10 h-screen'>
          <img
            loading='lazy'
            src='/safari-2.jpg'
            alt='People at the safari looking at the elephants'
            className='w-full h-screen'
          />
        </section>
        <section className='relative z-10 container mx-auto mb-12 max-w-4xl text-center text-white'>
          <h2 className='font-bold text-3xl'>
            HELP US SAVE ENDANGERED SPECIES
          </h2>
          <p className='mt-5 mb-7 leading-relaxed'>
            At EcoWildHub, we invite you to help us protect our planet. Your
            donation supports vital conservation efforts, allowing us to share
            important stories about our environment and raise awareness for
            sustainable practices. By contributing, you fuel our mission to
            educate and inspire action for wildlife conservation. Together, we
            can create lasting change and join the fight for nature.
          </p>
          <Button type='button' bg='green'>
            <Link
              to='https://www.paypal.com/donate/?hosted_button_id=HAV6D95M84BG2'
              target='_blank'
              rel='noopener noreferrer'
            >
              Donate Here!
            </Link>
          </Button>
        </section>
        <section className='py-14 relative z-10 bg-white'>
          <div className='px-10'>
            <span
              className='block w-20 h-[3px] bg-secondary-100 mb-3'
              aria-label='A yellow line'
            ></span>
            <h3 className='pt-2 pb-4 font-bold text-[32px]'>DESTINATIONS</h3>
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
            {destinations.map((destination, index) => (
              <div key={index} className='flex-1'>
                <img
                  loading='lazy'
                  src={destination}
                  alt={destination.split('.')[0].slice(1)}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </section>
        <LatestNews button={true} />
        <Reachout bgColor='#228B22' buttonBorder={true} />
        <UpcomingEvents />
        <EcowildCount />
        <LatestBlogs />
        {showScrollButton && <ScrollToTopButton />}
      </main>
    </div>
  );
};

export default Home;
