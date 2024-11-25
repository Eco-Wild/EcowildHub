import { useState } from 'react';
import clsx from 'clsx';

const stories = [
  {
    text: 'EcoWildHub aims to transform the lives of Rwandans by fostering a deep connection between communities and their natural environment. Through educational programs and interactive conservation initiatives, EcoWildHub empowers individuals to understand the importance of biodiversity and sustainable practices. By organizing local events and workshops, the platform encourages people to participate in conservation efforts, cultivate eco-friendly habits, and become stewards of their surroundings. As communities unite in this mission, EcoWildHub envisions a brighter future where both people and wildlife thrive together, enhancing the quality of life and preserving Rwanda’s rich natural heritage for generations to come.',
    bgColor: '#141B34',
  },
  {
    text: 'EcoWildHub aims to transform the lives of Rwandans by fostering a deep connection between communities and their natural environment. Through educational programs and interactive conservation initiatives, EcoWildHub empowers individuals to understand the importance of biodiversity and sustainable practices. By organizing local events and workshops, the platform encourages people to participate in conservation efforts, cultivate eco-friendly habits, and become stewards of their surroundings. As communities unite in this mission, EcoWildHub envisions a brighter future where both people and wildlife thrive together, enhancing the quality of life and preserving Rwanda’s rich natural heritage for generations to come.',
    bgColor: '#8B4513',
  },
  {
    text: 'EcoWildHub aims to transform the lives of Rwandans by fostering a deep connection between communities and their natural environment. Through educational programs and interactive conservation initiatives, EcoWildHub empowers individuals to understand the importance of biodiversity and sustainable practices. By organizing local events and workshops, the platform encourages people to participate in conservation efforts, cultivate eco-friendly habits, and become stewards of their surroundings. As communities unite in this mission, EcoWildHub envisions a brighter future where both people and wildlife thrive together, enhancing the quality of life and preserving Rwanda’s rich natural heritage for generations to come.',
    bgColor: '#228B22',
  },
  {
    text: 'EcoWildHub aims to transform the lives of Rwandans by fostering a deep connection between communities and their natural environment. Through educational programs and interactive conservation initiatives, EcoWildHub empowers individuals to understand the importance of biodiversity and sustainable practices. By organizing local events and workshops, the platform encourages people to participate in conservation efforts, cultivate eco-friendly habits, and become stewards of their surroundings. As communities unite in this mission, EcoWildHub envisions a brighter future where both people and wildlife thrive together, enhancing the quality of life and preserving Rwanda’s rich natural heritage for generations to come.',
    bgColor: '#000000',
  },
  {
    text: 'EcoWildHub aims to transform the lives of Rwandans by fostering a deep connection between communities and their natural environment. Through educational programs and interactive conservation initiatives, EcoWildHub empowers individuals to understand the importance of biodiversity and sustainable practices. By organizing local events and workshops, the platform encourages people to participate in conservation efforts, cultivate eco-friendly habits, and become stewards of their surroundings. As communities unite in this mission, EcoWildHub envisions a brighter future where both people and wildlife thrive together, enhancing the quality of life and preserving Rwanda’s rich natural heritage for generations to come.',
    bgColor: '#013499',
  },
];

const numbers = ['01', '02', '03', '04', '05'];

const OurStory = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  return (
    <section className='pt-8'>
      <div className='lg:flex'>
        <div className='lg:w-5/12'>
          <img
            loading='lazy'
            src='/zebras2.jpg'
            alt='Zebras in the field'
            className='w-full h-full'
          />
        </div>
        <div
          className='lg:w-7/12 flex sm:flex-row justify-center flex-col space-y-12 sm:space-y-0 sm:space-x-16 sm:px-16 px-6 sm:py-20 py-8 leading-relaxed text-white'
          style={{ backgroundColor: stories[selectedStory].bgColor }}
        >
          <div className='flex flex-col justify-center items-center text-center'>
            <span
              className='block w-20 h-[3px] bg-secondary-100 mb-3'
              aria-label='A yellow line'
            ></span>
            <h4 className='font-bold text-[32px] pb-16'>OUR STORY</h4>
            <div>
              <p className='flex items-start gap-5 text-left'>
                <img
                  loading='lazy'
                  src='/calendar-yellow.svg'
                  alt='A yellow calendar icon'
                />
                {stories[selectedStory].text}
              </p>
              <h5 className='mt-7 mb-12'>
                Help us to protect wildlife around the world.
              </h5>
            </div>
          </div>
          <div className='self-stretch flex flex-row sm:flex-col sm:justify-center justify-around sm:space-y-12 sm:border-l sm:border-t-0 border-t'>
            {numbers.map((number, index) => (
              <span
                key={index}
                className={clsx(
                  'block cursor-pointer sm:pl-9 sm:py-2 py-5 px-2 sm:px-0 ',
                  selectedStory === index
                    ? 'font-extrabold sm:border-l-[3px] sm:border-t-0 border-t-2 '
                    : 'font-medium'
                )}
                onClick={() => setSelectedStory(index)}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
