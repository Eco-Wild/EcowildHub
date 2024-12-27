import { Icon } from '@iconify/react/dist/iconify.js';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../../../../components/hook-form/InputField';
import { useState } from 'react';
import { SigninValues } from '../../../../utils/types';
import Button from '../../../../components/Button';
import BackgroundLayout from '../../components/BackgroundLayout';
import { Link } from 'react-router-dom';

const ValidationSchema = yup.object({
  userName: yup
    .string()
    .required('User name is required')
    .min(3, 'Should contain minimum of 8 characters'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.'),
});

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<SigninValues>({
    resolver: yupResolver<SigninValues>(ValidationSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SigninValues> = (_data: SigninValues, e) => {
    e?.preventDefault();

    // return new Promise<void>((resolve) => {
    //   setTimeout(() => {
    if (isSubmitted) {
      reset();
    }
    //     resolve();
    //   }, 2000);
    // });
  };

  return (
    <BackgroundLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='xs:px-10 px-5 py-12 bg-white w-full  max-w-[499px] rounded-lg'
      >
        <h1 className='mb-5 font-bold text-[32px] text-center'>Sign In</h1>
        <InputField
          type={'text'}
          label='UserName'
          placeholder='Enter your username'
          control={control}
          registration={{ ...register('userName') }}
          hasError={errors.userName}
          errorMessage={errors.userName?.message}
          withIcon
          iconStart={<Icon icon='ic:sharp-person' className='w-5 h-5' />}
          className='h-[55px] bg-[#f0f2f0] rounded-sm px-10'
        />

        <InputField
          type={showPassword ? 'password' : 'text'}
          label='Password'
          placeholder='Enter your password'
          control={control}
          registration={{ ...register('password') }}
          hasError={errors.password}
          errorMessage={errors.password?.message}
          withIcon
          iconStart={<Icon icon='fa:lock' className='w-4 h-4' />}
          iconEnd={
            <Icon
              icon={showPassword ? 'ion:eye-off' : 'ri:eye-fill'}
              className='w-5 h-5'
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          className='h-[55px] bg-[#f0f2f0] rounded-sm px-10'
        />
        <Button type='submit' bg='green' className='font-extrabold w-full my-2'>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>
        <Link
          to='/dashboard/forgot-password'
          className='block text-right font-sm'
        >
          Forgot Password?
        </Link>
      </form>
    </BackgroundLayout>
  );
};

export default Signin;
