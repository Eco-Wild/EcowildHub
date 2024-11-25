import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Icon } from '@iconify/react/dist/iconify.js';
import useFormPersist from 'react-hook-form-persist';
import Button from './Button';
import { InputField } from './hook-form/InputField';
import { TextAreaField } from './hook-form/TextAreaField';

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
  comment: yup
    .string()
    .required('Comment is required')
    .min(3, 'Should contain minimum of 8 characters'),
  // .max(5000, 'Should contain maximum of 100 characters'),
});

const PostCommment = () => {
  const [comments, setComments] = useState(
    () => JSON.parse(localStorage.getItem('comments') || '[]') ?? []
  );

  const {
    control,
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<Comment>({
    resolver: yupResolver<Comment>(ValidationSchema),
    mode: 'onBlur',
  });

  useFormPersist('commentForm', {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const commentContent = watch('comment');

  const onSubmit: SubmitHandler<Comment> = (data: Comment, e) => {
    e.preventDefault();

    const commentsArr = [...comments, data];

    localStorage.setItem('comments', JSON.stringify(commentsArr));
    const getComments = JSON.parse(localStorage.getItem('comments') || '[]');

    return new Promise((resolve) => {
      setTimeout(() => {
        if (isSubmitted) {
          setComments(() => getComments);
          reset();
          setValue('comment', '');
        }
        resolve();
      }, 2000);
    });
  };

  return (
    <section className='pt-9'>
      <div className='flex items-center gap-14'>
        <h6 className='font-extrabold text-xl'>TAGS</h6>
        <div className='flex xs:flex-row flex-col gap-3'>
          <span className='flex items-center h-[54px] max-w-full px-10 bg-tertiary-600 font-medium text-sm text-white'>
            Animals
          </span>
          <span className='flex items-center h-[54px] max-w-full px-10 bg-tertiary-600 font-medium text-sm text-white'>
            Wildlife
          </span>
        </div>
      </div>
      {comments?.length > 0 && (
        <section className='my-14 max-h-64  max-w-[800px] overflow-y-scroll'>
          {comments.map((comment, index) => (
            <div key={index} className='flex items-center space-x-9 mb-7'>
              <img loading='lazy' src='/customer-avatar.svg' alt='An avatar' />
              <div className=''>
                <span className='block mb-4 font-bold text-xl'>
                  {comment.name}
                </span>
                <p className='text-sm opacity-50'>{comment.comment}</p>
              </div>
            </div>
          ))}
        </section>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white max-w-[800px] p-6 mt-6'
      >
        <h4 className='font-bold font-REM text-xl'>POST A COMMENT</h4>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-5'>
          <InputField
            type={'text'}
            placeholder='Your Name'
            control={control}
            registration={{ ...register('name') }}
            hasError={errors.name}
            errorMessage={errors.name?.message}
            isRequired
            className='h-16 rounded bg-cream-100 placeholder:opacity-40'
          />
          <InputField
            type={'text'}
            placeholder='Your Email'
            control={control}
            registration={{ ...register('email') }}
            hasError={errors.email}
            errorMessage={errors.email?.message}
            isRequired
            className='h-16 rounded bg-cream-100 placeholder:opacity-40'
          />
        </div>
        <TextAreaField
          id='comment'
          placeholder='Type your comment'
          registration={{ ...register('comment') }}
          errorMessage={errors.comment?.comment}
          hasError={errors.comment}
          value={commentContent}
          isRequired
          className='placeholder:opacity-40 bg-cream-100 rounded mb-4 mt-2'
        />
        <Button type='submit' bg='green' disabled={isSubmitting}>
          {isSubmitting ? (
            <span>
              <Icon
                icon='eos-icons:bubble-loading'
                className='inline-block -mt-1 w-5 h-6 mr-2'
              />
              POSTING...
            </span>
          ) : (
            'POST COMMENT'
          )}
        </Button>
      </form>
    </section>
  );
};

export default PostCommment;
