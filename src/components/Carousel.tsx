import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Button from './Button';

const carouselData = [
  {
    image: '/canopy-walk.jpeg',
    text: 'A GLOBAL COMMUNITY COMMITED TO WILDLIFE CONSERVATION',
    alt: 'Canopy walk',
  },
  {
    image: '/wild-life.jpeg',
    text: 'PROTECTING NATURE-ONE STORY AT A TIME',
    alt: 'Kangaroos in the jungle',
  },
  {
    image: '/safari.jpeg',
    text: "JOIN US IN SAFEDUARDING NATURE'S BEAUTY TODAY",
    alt: 'Safari',
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className='slider-container overflow-x-hidden'>
      <Slider {...settings}>
        {carouselData.map((data, index) => (
          <div className='relative -bottom-2' key={index}>
            <img src={data.image} alt={data.alt} className='w-full h-[750px]' />
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'>
              <div className='container mx-auto max-w-[1728px] flex flex-col justify-center h-full'>
                <p className='text-secondary-100 text-lg font-bold'>
                  Explore Our Destinations
                </p>
                <h1 className='text-white md:text-[50px] text-[32px] mt-4 mb-6 md:w-[757px] font-extrabold font-REM leading-tight break-words'>
                  {data.text}
                </h1>
                <div className='xs:flex gap-6'>
                  <Button
                    type='button'
                    bg='green'
                    className='mb-3 xs:mb-0 block'
                  >
                    <Link to='/destinations'>Explore More</Link>
                  </Button>
                  <Button
                    type='button'
                    bg='white'
                    className='border-none block'
                  >
                    <Link to='/donate' className='text-black '>
                      Donate Now!
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
