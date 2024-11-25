import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='relative z-10 bg-primary-400 py-14'>
      <div className='container mx-auto max-w-[1728px]'>
        <div className='flex justify-between gap-3 flex-wrap  text-white'>
          <div className='flex flex-col items-center lg:w-2/12 lg:-ml-12'>
            <img
              loading='lazy'
              src='/logo-gray.svg'
              alt='EcowildHub logo'
              className='mb-2'
            />
            <span className='font-REM text-sm'>Copyright © 2024</span>
          </div>
          <ul className='lg:w-2/12 text-sm'>
            <li className='pb-2 pt-4'>
              <h6 className='text-bold font-REM text-base'>QUICK LINKS</h6>
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              HOME
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              ABOUT
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              DESTINATIONS
            </li>
          </ul>
          <ul className='lg:w-2/12 text-sm  self-center'>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              MEDIA
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              PUBLISH
            </li>
          </ul>
          <ul className='lg:w-2/12 text-sm'>
            <li className='pb-2 pt-4'>
              <h6 className='text-bold font-REM text-base'>ADDRESS</h6>
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              www.ecowild.com
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              Kigali - Rwanda
            </li>
            <li className='py-2 opacity-90'>
              <Icon
                icon='game-icons:check-mark'
                className='inline-block mr-4'
              />
              ecowild@gmail.com
            </li>
          </ul>
          <div className='lg:w-3/12 w-8/12'>
            <h6 className='font-bold font-REM text-base pb-2 pt-4'>
              GET IN TOUCH
            </h6>
            <p className='text-sm opacity-90  py-2'>
              Feel Free to get in touch with us. We are always open to discuss
              about the EcowildHub. Be part of our campain and join us for more
              experience.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6 text-white mt-9 lg:-ml-6 opacity-90 lg:w-7/12'>
          <Link
            to=''
            className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white bg-opacity-15'
          >
            <Icon icon='iconoir:instagram' className='w-[30px] h-[30px]' />
          </Link>
          <Link
            to=''
            className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white bg-opacity-15'
          >
            <Icon icon='hugeicons:facebook-02' className='w-[30px] h-[30px]' />
          </Link>
          <Link
            to=''
            className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white bg-opacity-15'
          >
            <Icon icon='basil:linkedin-outline' className='w-[30px] h-[30px]' />
          </Link>
          <Link
            to=''
            className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white bg-opacity-15'
          >
            <Icon icon='proicons:x-twitter' className='w-[30px] h-[30px]' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
