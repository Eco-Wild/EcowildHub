import { FC } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import { Icon } from '@iconify/react/dist/iconify.js';
// import { toast } from 'sonner';

interface Props {
  name: string;
  label?: string;
  id?: string;
  label2?: string;
  value?: boolean;
  hasError: Merge<FieldError, FieldErrorsImpl<object>> | undefined;
  errorMessage: string | undefined;
  registration: Partial<UseFormRegisterReturn>;
  openTermsModal?: () => void;
}

const CheckBox: FC<Props> = ({
  name,
  label,
  label2,
  value = false,
  id,
  hasError,
  errorMessage,
  registration,
  openTermsModal,
}) => {
  const handleCheckBox = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (openTermsModal) openTermsModal();
  };
  // const { field, fieldState } = useController({
  //   name,
  //   control,
  // });

  //   useEffect(() => {
  //     if (fieldState.error && fieldState.error.ref?.name === 'acceptTerms') {
  //       toast.error(
  //         <div>
  //           <p className='text-base font-bold pb-1'>Tick the Box to continue</p>
  //           <p className='text-sm'>You have to tick the box to continue!</p>
  //         </div>,
  //         {
  //           id: 'agree',
  //         }
  //       );
  //     }
  //   }, [fieldState.error]);

  // const handleChange = (newValue: boolean) => {
  //   setAgreed(newValue);
  //   field.onChange(newValue ? '1' : '0');
  // };

  return (
    <div className='mt-4 mb-5'>
      {label && (
        <label
          htmlFor={id}
          className='flex gap-2 cursor-pointer'
          onClick={(e) => handleCheckBox(e)}
        >
          <span
            className={`flex justify-center h-5 w-5 rounded-full border-[3px] border-primary-400  ${
              value ? 'bg-primary-400' : ''
            }`}
          >
            <Icon
              icon='fluent:checkmark-12-filled'
              className='font-bold text-white'
            />
          </span>
          <input
            name={name}
            id={id}
            checked={value}
            type='checkbox'
            className='sr-only'
            {...registration}
          />
          {label} <span className='font-bold'>{label2}</span>
        </label>
      )}
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default CheckBox;
