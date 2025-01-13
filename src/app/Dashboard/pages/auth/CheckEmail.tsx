import Button from '../../components/Button';
import BackgroundLayout from '../../components/BackgroundLayout';
import { Link } from 'react-router-dom';

const CheckEmail = () => {
  return (
    <BackgroundLayout>
      <section className='xs:px-10 px-5 py-12 bg-white w-full  max-w-[499px] rounded-lg font-Lato text-center'>
        <h2 className='font-bold text-[32px]'>Check Your Email</h2>
        <p className='opacity-50 my-2'>
          We have sent an email with password reset information
          yves@awesomity.rw
        </p>
        <p className='opacity-50 mt-6'>
          {' '}
          Didn’t receive an email? Check spam folder or
        </p>
        <Button type='submit'>Resend Email</Button>
        <Button type='button' bg='white'>
          <Link to='/dashboard/auth/signin'> Back to Login</Link>
        </Button>
      </section>
    </BackgroundLayout>
  );
};

export default CheckEmail;
