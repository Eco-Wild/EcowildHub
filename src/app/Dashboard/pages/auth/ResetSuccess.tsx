import BackgroundLayout from '../../components/BackgroundLayout';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ResetSuccess = () => {
  return (
    <BackgroundLayout>
      <section className='xs:px-10 px-5 py-12 bg-white w-full  max-w-[499px] rounded-lg text-center'>
        <h2 className='font-bold text-[32px]'>Password Reset Successfully</h2>
        <p className='opacity-50 mt-1 mb-8'>
          Log in into your account with your password
        </p>
        <Button type='button'>
          <Link to='/dashboard/signin'>Log in</Link>
        </Button>
      </section>
    </BackgroundLayout>
  );
};

export default ResetSuccess;
