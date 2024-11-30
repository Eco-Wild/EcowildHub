import { Icon } from '@iconify/react/dist/iconify.js';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import HeroSectionHalf from '../../components/HeroSectionHalf';
import { InputField } from '../../components/hook-form/InputField';
import { TextAreaField } from '../../components/hook-form/TextAreaField';
import CheckBox from '../../components/hook-form/CheckBox';
import { ContactValues } from '../../utils/types';
import Button from '../../components/Button';
import { useState } from 'react';
import Terms from './Terms';

const ValidationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Should contain minimum of 8 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Wrong email format')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address with a proper domain'
    ),
  phoneNumber: yup
    .string()
    .required('This field is required')
    .matches(/^([0]{1})[0-9]{10}$/, 'Invalid phone number.'),
  message: yup
    .string()
    .required('Comment is required')
    .min(3, 'Should contain minimum of 8 characters')
    .max(5000, 'Should contain maximum of 100 characters'),
  acceptTerms: yup
    .bool()
    .oneOf([true], 'Accepting terms and conditions is required')
    .required(),
});

const Contact = () => {
  const [showTerms, setShowTerms] = useState(false);

  const {
    control,
    register,
    reset,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<ContactValues>({
    resolver: yupResolver<ContactValues>(ValidationSchema),
    mode: 'onBlur',
  });

  const message = watch('message');
  const acceptTerms = watch('acceptTerms');
  const isAgreed = getValues('acceptTerms');

  const handleAgreement = () => {
    setValue('acceptTerms', !isAgreed, { shouldValidate: true });
    setShowTerms(false);
  };

  const onSubmit: SubmitHandler<ContactValues> = (_data: ContactValues, e) => {
    e?.preventDefault();

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (isSubmitted) {
          reset();
          setValue('message', '');
        }
        resolve();
      }, 2000);
    });
  };

  return (
    <section>
      <HeroSectionHalf title='CONTACT US' />
      <section className='py-24 bg-[#F6F7FB]'>
        <div className='container mx-auto max-w-[1728px]'>
          <div className='md:flex gap-20'>
            <div className='flex-1 text-tertiary-600'>
              <span
                className='block w-20 h-[3px] bg-secondary-100 mb-3'
                aria-label='A yellow line'
              ></span>
              <h3 className='font-bold font-REM text-[32px] pb-3'>
                CONTACT US
              </h3>
              <p className='my-3 opacity-70 leading-relaxed tracking-wide'>
                We value your feedback and inquiries. Whether you have
                questions, need assistance, or want to learn more about our
                services, our team is here to help!
              </p>

              <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-6'>
                <div>
                  <h6 className='flex items-center gap-2 font-medium text-xl '>
                    <Icon
                      icon='mage:phone-call'
                      className='w-10 h-10 p-2  bg-primary-400 rounded-full text-white'
                    />
                    Contact Number
                  </h6>
                  <span className='inline-block mt-1 mr-2 font-extralight'>
                    +250 785505106
                  </span>
                  <span className='inline-block mt-1 font-extralight'>
                    +250 785505106
                  </span>
                </div>
                <div>
                  <h6 className='flex items-center gap-2 font-medium text-xl '>
                    <Icon
                      icon='mdi-light:email'
                      className='w-10 h-10 p-2  bg-primary-400 rounded-full text-white'
                    />
                    Email Address
                  </h6>
                  <span className='inline-block mt-1 font-extralight '>
                    khanemery123@gmail.com
                  </span>
                </div>
              </div>
              <hr className='h-px text-gray-200 bg-tertiary-600 opacity-10 border-0' />
              <div className='mt-6'>
                <h6 className='flex items-center gap-2 font-medium text-xl '>
                  <Icon
                    icon='circum:location-on'
                    className='w-10 h-10 p-2  bg-primary-400 rounded-full text-white'
                  />
                  Location
                </h6>
                <span className='inline-block mt-1 font-extralight mb-8'>
                  Kigali , Rwanda
                </span>
              </div>
            </div>
            <div className='flex-1'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                  type={'text'}
                  placeholder='Name'
                  control={control}
                  registration={{ ...register('name') }}
                  hasError={errors.name}
                  errorMessage={errors.name?.message}
                  isRequired
                  className='h-16 rounded bg-white placeholder:opacity-40'
                />
                <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'>
                  <InputField
                    type={'text'}
                    placeholder='Email'
                    control={control}
                    registration={{ ...register('email') }}
                    hasError={errors.email}
                    errorMessage={errors.email?.message}
                    isRequired
                    className='h-16 rounded bg-white placeholder:opacity-40'
                  />
                  <InputField
                    type={'text'}
                    placeholder='Phone number'
                    control={control}
                    registration={{ ...register('phoneNumber') }}
                    hasError={errors.phoneNumber}
                    errorMessage={errors.phoneNumber?.message}
                    isRequired
                    className='h-16 rounded bg-white placeholder:opacity-40'
                  />
                </div>
                <TextAreaField
                  id='message'
                  placeholder='Type your message'
                  registration={{ ...register('message') }}
                  errorMessage={errors.message?.message}
                  hasError={errors.message}
                  value={message}
                  isRequired
                  className='placeholder:opacity-40 bg-white rounded mb-4 mt-2'
                />
                <CheckBox
                  name='acceptTerms'
                  id='terms'
                  registration={{ ...register('acceptTerms') }}
                  label='I Accept to the'
                  label2='Terms & Conditions'
                  value={acceptTerms}
                  errorMessage={errors.acceptTerms?.message}
                  hasError={errors.acceptTerms}
                  setShowTerms={setShowTerms}
                />
                <Button type='submit' bg='green' disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>
                      <Icon
                        icon='eos-icons:bubble-loading'
                        className='inline-block -mt-1 w-5 h-6 mr-2'
                      />
                      Sending...
                    </span>
                  ) : (
                    'Contact Us'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {showTerms && (
        <Terms setShowTerms={setShowTerms} handleAgreement={handleAgreement} />
      )}
    </section>
  );
};

export default Contact;
