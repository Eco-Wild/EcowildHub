import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

interface DropdownItem {
  name: string;
  href?: string; // Optional, for filter items this won't be needed
}
interface Props {
  items: DropdownItem[];
  className: string;
  onSelect?: (option: string) => void;
  onClose: () => void;
}

const Dropdown = ({ items, className, onSelect, onClose }: Props) => {
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Handle outside click
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [onClose]);

  const handleItemClick = (itemName: string) => {
    onSelect?.(itemName);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -90 }}
        transition={{ duration: 0.3 }}
        className={clsx(
          'flex flex-col justify-center items-center absolute z-10 w-32 h-24 mt-5 mb-3 text-sm text-tertiary-600 text-center  bg-white border-gray-100 drop-shadow-md rounded-md  ',
          className
        )}
        ref={dropdownRef}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className='w-10/12 px-2 py-1 my-1 opacity-70 hover:bg-cream-100 rounded-md cursor-pointer'
            onClick={() => handleItemClick(item.name)}
          >
            {item.href ? (
              <Link to={item.href}>{item.name}</Link>
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default Dropdown;
