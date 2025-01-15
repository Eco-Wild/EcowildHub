import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from './Button';
import { Icon } from '@iconify/react/dist/iconify.js';
import Dropdown from './Dropdown';

const navItems = [
  { name: 'Home', href: '/', id: '1' },
  { name: 'About', href: '/about-us', id: '2' },
  { name: 'Destinations', href: '/destinations', id: '3' },
  { name: 'Events', href: '/events', id: '4' },
  {
    name: 'Media',
    href: '',
    dropdown: [
      { name: 'Image Gallery', href: '/media/image-gallery' },
      { name: 'Video Gallery', href: '/media/video-gallery' },
    ],
    id: '5',
  },

  {
    name: 'Publish',
    href: '',
    dropdown: [
      { name: 'News', href: '/publish/news' },
      { name: 'Blogs', href: '/publish/blogs' },
    ],
    id: '6',
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-primary-400 transition ease transform duration-300`;

  const location = useLocation();

  const handleMenuClick = (id: string) => {
    setActiveDropdown(activeDropdown === id ? '' : id);
  };

  return (
    <header className='container mx-auto max-w-[1728px]'>
      <nav>
        <div className='flex h-24 bg-white items-center justify-between space-x-3 py-3'>
          <Link to='/' className='flex-shrink-0'>
            <img
              loading='lazy'
              src='/logo.svg'
              className='h-[64px] w-20 -ml-3'
              alt='ecowildhub logo'
            />
          </Link>

          <button
            className='group flex h-12 w-12 flex-col items-center justify-center lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>

          <ul className='hidden items-center space-x-10 lg:flex'>
            {navItems.map((item) => {
              const isActive = item.href === location.pathname;
              return (
                <li
                  key={item.id}
                  className='relative text-[15px] font-medium text-nowrap hover:text-primary-400'
                >
                  {item.dropdown ? (
                    <>
                      {item.name}
                      <button
                        type='button'
                        onClick={() => handleMenuClick(item.id)}
                      >
                        <Icon
                          icon='material-symbols-light:keyboard-arrow-down-rounded'
                          className='inline-flex items-center ml-1 w-6 h-6'
                        />
                        <span className='sr-only'>Dropdown button</span>
                      </button>
                    </>
                  ) : (
                    <Link
                      className={clsx(
                        '',
                        isActive && 'border-b-2 border-primary-400 p-2 pt-0'
                      )}
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && item.id === activeDropdown && (
                    <Dropdown
                      items={item.dropdown}
                      className='top-14'
                      onClose={() => setActiveDropdown('')}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <div className='lg:flex space-x-4 hidden'>
            {' '}
            <Button type='button' bg='white' onClick={() => setIsOpen(false)}>
              <Link to='/contact'>Contact Us</Link>
            </Button>
            <Button type='button' bg='green' onClick={() => setIsOpen(false)}>
              <Link
                to='https://www.paypal.com/donate/?hosted_button_id=HAV6D95M84BG2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Donate
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile view */}
        <div className={clsx('', isOpen ? 'block' : 'hidden')}>
          {' '}
          <ul className={clsx('my-4 space-y-5')}>
            {navItems.map((item) => {
              const isActive = item.href === location.pathname;
              return (
                <li
                  key={item.id}
                  className='relative text-[15px] font-medium  hover:text-primary-400'
                  onClick={() => {
                    setIsOpen(false);
                    handleMenuClick(item.id);
                  }}
                >
                  <Link
                    className={clsx(
                      '',
                      isActive && 'border-b-2 border-primary-400 py-1'
                    )}
                    to={item.href}
                  >
                    {item.name}

                    {item.dropdown && (
                      <Icon
                        icon='material-symbols-light:keyboard-arrow-down-rounded'
                        className='inline-flex items-center ml-1 w-6 h-6'
                      />
                    )}
                  </Link>

                  {item.dropdown && item.id === activeDropdown && (
                    <Dropdown
                      items={item.dropdown}
                      className='top-6 shadow-md'
                      onClose={() => setActiveDropdown('')}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <Button
            type='button'
            bg='white'
            className='block my-5'
            onClick={() => setIsOpen(false)}
          >
            <Link to='/contact'>Contact Us</Link>
          </Button>
          <Button
            type='button'
            bg='green'
            className='block my-5'
            onClick={() => setIsOpen(false)}
          >
            <Link
              to='https://www.paypal.com/donate/?hosted_button_id=HAV6D95M84BG2'
              target='_blank'
              rel='noopener noreferrer'
            >
              Donate
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
