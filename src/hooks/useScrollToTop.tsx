import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonDisplay = () => {
      setShowScrollButton(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScrollButtonDisplay);

    return () =>
      window.removeEventListener('scroll', handleScrollButtonDisplay);
  }, []);

  return showScrollButton;
};

export default useScrollToTop;
