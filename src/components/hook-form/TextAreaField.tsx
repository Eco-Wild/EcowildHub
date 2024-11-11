import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react';
import clsx from 'clsx';
import { ErrorMessage } from './ErrorMessage';

interface TextAreaFieldProps {
  id: string;
  placeholder?: string;
  autoFocus?: boolean;
  isRequired?: boolean;
  registration: Partial<UseFormRegisterReturn>;
  hasError: FieldError | undefined;
  className?: string;
  label?: string;
  rows?: number;
  limit?: number | null;
  value?: string;
  errorMessage?: string;
}

export const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  id,
  placeholder,
  autoFocus = false,
  registration,
  className,
  rows = 7,
  hasError,
  limit = 5000,
  value,
  errorMessage,
}) => {
  return (
    <>
      <textarea
        name={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows={rows}
        value={value}
        className={clsx(
          'w-full  p-4 outline-none  disabled:bg-gray-100',
          hasError && 'border-red-500',
          className
        )}
        {...registration}
        maxLength={limit ? limit : undefined}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
