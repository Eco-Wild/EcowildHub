import React from 'react';
import clsx from 'clsx';
import { Label } from './Label';
import { ErrorMessage } from './ErrorMessage';
import {
  FieldError,
  UseFormRegisterReturn,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';

interface InputFieldProps {
  type?: 'text' | 'number' | 'email' | 'password' | 'file';
  label?: string | JSX.Element | undefined;
  className?: string;
  placeholder?: string;
  iconPosition?: 'start' | 'end';
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  isDisabled?: boolean;
  hasError: Merge<FieldError, FieldErrorsImpl<object>> | undefined;
  withIcon?: boolean;
  canPressSpace?: boolean;
  registration: Partial<UseFormRegisterReturn>;
  min?: string;
  max?: string;
  value?: string | number;
  isRequired?: boolean;
  errorMessage?: string | undefined;
  control: unknown;
  hide?: string;
  accept?: string;
  getValues?: (payload?: string | string[]) => object;

  handleImagePreview?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTogglePassword?: () => void;
}

export const InputField = ({
  type,
  iconStart,
  iconEnd,
  label,
  hasError,
  className,
  isRequired,
  errorMessage,
  registration,
  placeholder,
  min,
  max,
  value,
  withIcon,
  hide,
  accept,
  //   getValues,
  //   handleImagePreview,
  handleTogglePassword,
  isDisabled = false,
}: InputFieldProps) => {
  const { name } = registration;
  //   const images = getValues && (getValues('photos') ?? []);

  return (
    <>
      <div className={clsx('mb-4')}>
        <div className=''>
          {!!label && (
            <Label htmlFor={name} isRequired={isRequired}>
              {label}
            </Label>
          )}
        </div>
        <div className='relative flex-1 '>
          <input
            className={clsx(
              'p-4 w-full outline-none  disabled:bg-gray-100',
              hasError && 'border-red-500 border-b-2',
              className,
              hide
            )}
            type={type}
            disabled={isDisabled}
            name={name}
            value={value}
            id={name}
            placeholder={placeholder}
            accept={accept}
            // onKeyDown={canPressSpace ? undefined : handleKeyDown}
            min={min}
            max={max}
            multiple
            {...registration}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   handleImagePreview && handleImagePreview(e);
            //   onChange &&
            //     onChange({
            //       target: {
            //         name: 'photos',
            //         value: getValues &&
            //           e.target.files && [
            //             ...(images as File[]),
            //             ...Array.from(e.target.files),
            //           ],
            //       },
            //     });
            // }}
          />

          {withIcon && (
            <span
              onClick={() => handleTogglePassword && handleTogglePassword()}
              className='cursor-pointer'
            >
              <span className='p-1 flex items-center absolute inset-y-3 left-3'>
                {iconStart}
              </span>
              <span className='p-1 flex items-center absolute inset-y-4 right-3'>
                {iconEnd}
              </span>
            </span>
          )}
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </>
  );
};
