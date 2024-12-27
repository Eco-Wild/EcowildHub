import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import useOnclickOutside from '../../../hooks/useOnclickOutside';
import { useRef } from 'react';

const menuList = [
  {
    icon: 'hugeicons:dashboard-square-02',
    name: 'Overview',
    link: '/dashboard/overview',
  },
  {
    icon: 'lets-icons:comment-light',
    name: 'Publish',
    link: '/dashboard/publish',
  },
  {
    icon: 'basil:settings-outline',
    name: 'Media',
    link: '/dashboard/media',
  },
];

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavBar = ({ isOpen, setIsOpen }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnclickOutside({ isOpen, setIsOpen, modalRef });

  return (
    <>
      {/* Big screen */}
      <section>
        <div className='fixed top-0 bottom-0 right-0 left-0 w-[240px] h-full font-Montserrat bg-tertiary-600 p-5 pt-1 text-white md:block hidden'>
          <div>
            <div
              className='inline-flex items-center gap-2 border-b border-[#2b3248] py-1 -ml-2'
              role='sidebar'
              aria-labelledby='modalTitle'
            >
              <img
                src='/logo-transparent.svg'
                alt='Ecowild logo'
                className='w-12 h-12'
              />
              <h2 className='font-semibold text-sm' id=''>
                Ecowild Hub
              </h2>
            </div>
            <ul className='flex flex-col gap-8 mt-6'>
              {menuList.map((menu, index) => (
                <li key={index} className='flex-1 font-medium text-sm'>
                  <Link to={menu.link} className='flex items-center gap-2'>
                    <Icon icon={menu.icon} className='w-5 h-5' />
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Mobile screen */}
      <section
        className={clsx(
          'fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-50 h-screen transition-opacity',
          isOpen ? 'block opacity-100' : 'hidden opacity-0'
        )}
        aria-modal='true'
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)} // Clicking the backdrop closes the modal
          className='absolute top-0 left-0 w-full h-full'
        ></div>

        {/* Modal Content */}
        <div
          ref={modalRef} // Ref applied here to only monitor modal content
          className={clsx(
            'relative z-30 w-[230px] h-full font-Montserrat bg-tertiary-600 p-5 pt-1 text-white transform transition-transform duration-500',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div>
            <div className='inline-flex items-center gap-2 border-b border-[#2b3248] py-1 -ml-2'>
              <img
                src='/logo-transparent.svg'
                alt='Ecowild logo'
                className='w-12 h-12'
              />
              <h2 className='font-semibold text-sm'>Ecowild Hub</h2>
            </div>
            <ul className='flex flex-col gap-8 mt-6'>
              {menuList.map((menu, index) => (
                <li
                  key={index}
                  id='modalTitle'
                  className='flex-1 font-medium text-sm'
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={menu.link} className='flex items-center gap-2'>
                    <Icon icon={menu.icon} className='w-5 h-5' />
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideNavBar;
