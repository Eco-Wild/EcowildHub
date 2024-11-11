import { Icon } from '@iconify/react/dist/iconify.js';

const ScrollToTopButton = () => {
  return (
    <div className='fixed bottom-6 right-3 z-50 hover:scale-110'>
      <button
        type='button'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon icon='noto-v1:top-arrow' className='w-14 h-14' />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
