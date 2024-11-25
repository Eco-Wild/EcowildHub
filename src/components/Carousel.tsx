import { Icon } from '@iconify/react/dist/iconify.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  animals: string[];
}

function Carousel({ animals }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Icon
        icon='grommet-icons:form-previous'
        className={className}
        style={{
          ...style,
          display: 'block',
          width: '32px',
          height: '32px',
          //   marginLeft: '-11px',
          color: '005DAC',
          border: '2px solid #005DAC',
          borderRadius: '8px',
        }}
        onClick={onClick}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Icon
        icon='grommet-icons:form-next'
        className={className}
        style={{
          ...style,
          display: 'block',
          width: '32px',
          height: '32px',
          //   marginRight: '-11px',
          color: '005DAC',
          border: '2px solid #005DAC',
          borderRadius: '8px',
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {animals.map((animal, index) => (
          <div key={index} className='p-4'>
            <img
              loading='lazy'
              src={animal}
              alt=''
              className='w-[1472px] h-[284px] rounded-lg'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
