import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputField } from '../../../../components/hook-form/InputField';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import { PasswordReset } from '../../../../utils/types';

const passwordValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'New password must be at least 8 characters long')
    .notOneOf(
      [Yup.ref('currentPassword')],
      'New password must be different from the current password'
    ),
  confirmNewPassword: Yup.string()
    .required('Please confirm your new password')
    .oneOf([Yup.ref('newPassword')], 'Password must match new password'),
});

const ResetPassword = () => {
  const {
    control,
    register,
    // setValue,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordValidationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<PasswordReset> = async (
    data: PasswordReset,
    e
  ) => {
    e?.preventDefault();
    console.log(data);
  };
  return (
    <BackgroundLayout>
      <section className='xs:px-10 px-5 py-10 mb-4 font-Lato bg-white w-full  max-w-[499px] rounded-lg'>
        <h2 className='font-bold text-[32px]  text-center'>
          Forgot your password?
        </h2>
        <p className='opacity-50 my-2  text-center'>
          Enter the email you used to create your account so we can send you a
          link to resetting your password{' '}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
          <label htmlFor='email' className='block mb-2 opacity-50'>
            New Password
          </label>
          <InputField
            registration={{ ...register('newPassword') }}
            type='password'
            control={control}
            errorMessage={errors?.newPassword?.message}
            isRequired
            hasError={errors.newPassword}
            className='bg-[#F0F2F0] rounded-[4px]'
          />
          <label htmlFor='email' className='block mb-2 opacity-50'>
            Confirm Password
          </label>
          <InputField
            registration={{ ...register('confirmNewPassword') }}
            type='password'
            control={control}
            errorMessage={errors?.confirmNewPassword?.message}
            isRequired
            hasError={errors.confirmNewPassword}
            className='bg-[#F0F2F0] rounded-[4px]'
          />
          <Button type='submit'>Next</Button>
          <Button type='button' bg='white'>
            <Link to='/dashboard/auth/signin'> Back to Login</Link>
          </Button>
        </form>
      </section>
    </BackgroundLayout>
  );
};

export default ResetPassword;
