import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { InputField } from '../../../../components/hook-form/InputField';
import Button from '../../components/Button';
import BackgroundLayout from '../../components/BackgroundLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .required('Enter your email address'),
});

const ForgotPassword = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  return (
    <BackgroundLayout>
      <section className='xs:px-10 px-5 py-12 bg-white w-full  max-w-[499px] rounded-lg'>
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
            <Link to='/dashboard/signin'> Back to Login</Link>
          </Button>
        </form>
      </section>
    </BackgroundLayout>
  );
};

export default ForgotPassword;
