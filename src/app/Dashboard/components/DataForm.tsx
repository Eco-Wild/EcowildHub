import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Control } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { InputField } from '../../../components/hook-form/InputField';
import { FormValues, ImageValues } from '../../../utils/types';
import { InputDateField } from '../../../components/hook-form/CustomDateField';
import { TextAreaField } from '../../../components/hook-form/TextAreaField';
import Button from '../../../components/Button';

const FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg',
];
const ValidationSchema = Yup.object({
  title: Yup.string()
    .required('A title is required')
    .min(3, 'Should contain minimum of 8 characters'),
  date: Yup.date().required('Date is required'),
  author: Yup.string()
    .required('A title is required')
    .min(3, 'Should contain minimum of 8 characters'),
  description: Yup.string().required("Content can't be blank"),
  images: Yup.array()
    .of(
      Yup.mixed<ImageValues>()
        .required('This field is required')
        .test(
          'fileSize',
          'File too large',
          (value) => (value as File).size <= FILE_SIZE
        )
        .test('fileFormat', 'Unsupported File Format', (value) =>
          SUPPORTED_FORMATS.includes((value as File).type)
        )
    )
    .required('Please upload at least one photo'),
});

const Form = ({ title }: { title: string }) => {
  const {
    control,
    register,
    reset,
    watch,
    setValue,
    // getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormValues>({
    resolver: yupResolver<FormValues>(ValidationSchema),
    mode: 'onBlur',
  });

  //Persists data on reload, only after submission
  useFormPersist('myForm', {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const description = watch('description');

  const onSubmit: SubmitHandler<FormValues> = (_data: FormValues, e) => {
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
    <section>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <InputField
          type='text'
          label='Title'
          control={control}
          registration={{ ...register('title') }}
          hasError={errors.title}
          errorMessage={errors.title?.message}
          placeholder='Enter the title'
          isRequired
          className=''
        />
        <InputDateField
          name='date'
          label='Date'
          placeholder='Select a date'
          control={control as unknown as Control}
          hasError={errors.date}
          errorMessage={errors.date?.message}
          isRequired
        />
        <InputField
          type='text'
          label='Author'
          control={control}
          registration={{ ...register('author') }}
          hasError={errors.author}
          errorMessage={errors.author?.message}
          placeholder='Enter project name'
          isRequired
          className=''
        />
        <TextAreaField
          id='description'
          label='Description'
          placeholder='Type your description'
          registration={{ ...register('description') }}
          errorMessage={errors.description?.message}
          hasError={errors.description}
          value={description}
          isRequired
          className='placeholder:opacity-40 bg-white rounded mb-4 mt-2'
        />
        <Button type='submit' bg='' className='bg-tertiary-600'>
          {isSubmitting ? 'Publishing...' : 'Publish'}
        </Button>
      </form>
    </section>
  );
};

export default Form;
