import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    name: string;
    href: string;
    dropdown: {
      name: string;
      href: string;
    }[];
  };

  isActive: boolean;
  className: string;
}

const Dropdown = ({ item, isActive, className }: Props) => {
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -90 }}
        transition={{ duration: 0.3 }}
        className={clsx(
          'flex flex-col justify-center items-center absolute z-10 bg-white w-32 h-24 text-sm text-tertiary-600 text-center rounded-md',
          className
        )}
      >
        {item.dropdown.map((list) => (
          <li className='p-2 w-10/12 opacity-70 hover:bg-cream-100 rounded-md'>
            <Link
              className={clsx('', isActive && 'text-primary-400')}
              to={list.href}
            >
              {list.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default Dropdown;
