import { useForm } from 'react-hook-form';
import { InputField } from '../../../components/hook-form/InputField';
import Button from './Button';
import BackgroundLayout from './BackgroundLayout';

const ForgotPassword = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  return (
    <BackgroundLayout>
      <div className='xs:px-10 px-5 py-12 bg-white w-full  max-w-[499px] rounded-lg'>
        <h2 className='font-bold text-[32px]  text-center'>
          Forgot your password?
        </h2>
        <p className='opacity-50 my-2  text-center'>
          Enter the email you used to create your account so we can send you a
          link to resetting your password{' '}
        </p>
        <form className='mt-6'>
          <label htmlFor='email' className='block mb-2 opacity-50'>
            Enter your email address
          </label>
          <InputField
            type={'text'}
            control={control}
            registration={{ ...register('email') }}
            hasError={errors.email}
            errorMessage={errors.email?.message}
            isRequired
            className='h-[55px] bg-[#F0F2F0] rounded-[4px]'
          />
          <Button type='submit'>Next</Button>
          <Button type='button' bg='white'>
            Back to Login
          </Button>
        </form>
      </div>
    </BackgroundLayout>
  );
};

export default ForgotPassword;
