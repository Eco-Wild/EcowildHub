import { useNavigate } from 'react-router-dom';
import Button from './Button';
import clsx from 'clsx';

interface Props {
  bgColor: string;
  buttonBorder: boolean;
}

const Reachout = ({ bgColor, buttonBorder }: Props) => {
  const navigate = useNavigate();

  return (
    <section
      className='relative z-10 py-20'
      style={{ backgroundColor: bgColor }}
    >
      <div className='container mx-auto max-w-[1728px]'>
        <h4 className='font-bold text-2xl text-white'>Reach Out to Us</h4>
        <div className='lg:flex lg:space-x-80 items-center py-3'>
          <p className='flex-1 text-white text-lg font-light tracking-wide'>
            Want to now more about wildlife conservation and Ecowild Hub? Reach
            out to us for more Information.
          </p>

          <div className='justify-items-end mt-9 lg:mt-0'>
            <Button
              type='button'
              bg='green'
              className={clsx(
                'h-[54px]',
                buttonBorder ? 'border border-white' : ''
              )}
              onClick={() => navigate('./contact-us')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reachout;
