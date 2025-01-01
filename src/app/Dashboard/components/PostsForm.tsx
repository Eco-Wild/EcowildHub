import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Control } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { InputField } from '../../../components/hook-form/InputField';
import { FormValues } from '../../../utils/types';
import { InputDateField } from '../../../components/hook-form/CustomDateField';
import { TextAreaField } from '../../../components/hook-form/TextAreaField';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

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
      Yup.mixed<File>()
        .required('This field is required')
        .test(
          'fileSize',
          'File size too large (max 5MB)',
          (value) => value && value.size <= FILE_SIZE
        )
        .test(
          'fileFormat',
          'Unsupported file format (only JPEG, PNG, GIF allowed)',
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        )
    )
    .required('Please upload at least one photo')
    .test('isArray', 'Images must be an array', (value) => Array.isArray(value))
    .min(1, 'Please upload at least one photo')
    .max(3, 'Please upload not more than three photos'),
});

interface Props {
  title: string;
  onClose: () => void;
}

const PostsForm = ({ title, onClose }: Props) => {
  const [previewURLs, setPreviewURLs] = useState<string[]>([]);

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
    mode: 'onSubmit',
  });

  //Persists data on reload, only after submission
  useFormPersist('myForm', {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const description = watch('description');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      // Cleanup old preview URLs
      previewURLs.forEach((url) => URL.revokeObjectURL(url));

      // Generate new preview URLs
      const newPreviewURLs = files.map((file) => URL.createObjectURL(file));
      setValue('images', files, { shouldValidate: true });
      setPreviewURLs(() => [...previewURLs, ...newPreviewURLs].slice(0, 3));
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (_data: FormValues, e) => {
    e?.preventDefault();

    if (isSubmitted) {
      reset();
    }
  };

  return (
    <Modal onClose={onClose}>
      <section className='px-[52px] py-6 w-[600px] max-h-[800px] overflow-x-scroll bg-white rounded-xl text-tertiary-600'>
        <div className='flex justify-end my-3' onClick={onClose}>
          {' '}
          <button className='flex justify-center items-center w-9 h-9 border border-tertiary-600 rounded-lg'>
            <Icon icon='iconoir:cancel' className='w-6 h-6 text-tertiary-600' />
          </button>
        </div>
        <h1 className='font-bold text-xl text-center'>Add {title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type='text'
            label='Title'
            control={control}
            registration={{ ...register('title') }}
            hasError={errors.title}
            errorMessage={errors.title?.message}
            placeholder='Enter the title'
            isRequired
            className='h-[68px] bg-tertiary-600 bg-opacity-5 rounded-lg placeholder:text-tertiary-600 opacity-50 placeholder:text-sm'
          />
          <InputDateField
            name='date'
            label='Date'
            placeholder='Select a date'
            control={control as unknown as Control}
            hasError={errors.date}
            errorMessage={errors.date?.message}
            isRequired
            className=''
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
            className='h-[68px] bg-tertiary-600 bg-opacity-5 rounded-lg placeholder:text-tertiary-600 opacity-50 placeholder:text-sm'
          />
          <TextAreaField
            id='description'
            label='Description'
            placeholder='Enter your message'
            registration={{ ...register('description') }}
            errorMessage={errors.description?.message}
            hasError={errors.description}
            value={description}
            isRequired
            className='placeholder:text-tertiary-600 opacity-50 placeholder:text-sm mb-4 mt-2 bg-tertiary-600 bg-opacity-5 rounded-[6px]'
          />
          <div className='flex items-center gap-6 my-3'>
            <div className='flex items-center gap-4'>
              {previewURLs.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className='w-[34px] h-[34px] object-cover rounded-lg'
                />
              ))}
            </div>
            <InputField
              type='file'
              control={control}
              registration={{ ...register('images') }}
              hasError={errors.images}
              errorMessage={errors?.images?.message}
              handleImageChange={handleImageChange}
              accept={'image/*'}
              className='sr-only'
            />{' '}
            <label
              htmlFor='images'
              className='flex items-center justify-center w-[89px] h-[35px] font-bold border border-tertiary-600 rounded-lg cursor-pointer'
            >
              Upload
            </label>
          </div>
          <Button
            type='submit'
            bg=''
            disabled={isSubmitting}
            className='my-5 h-[68px] w-full font-bold text-sm bg-tertiary-600 rounded-xl'
          >
            {isSubmitting ? 'Publishing...' : 'Publish'}
          </Button>
        </form>
      </section>
    </Modal>
  );
};

export default PostsForm;
