import { Controller, FieldError, UseControllerProps } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import clsx from 'clsx';

import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

// type ReactDatePickPropsWithoutProps = Omit<
//   DatePickerProps,
//   'onChange' | 'selectsRange' | 'selectsMultiple'
// >;

type InputDateFieldProps = {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  errorMessage?: string;
  hasError: FieldError | undefined;
  value?: string;
  isRequired?: boolean;
} & UseControllerProps;

export const InputDateField: React.FC<InputDateFieldProps> = ({
  name,
  label,
  hasError,
  className,
  placeholder = 'Select date',
  isRequired,
  control,
  errorMessage,
  ...props
}) => {
  return (
    <>
      {!!label && (
        <Label htmlFor={name} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <Controller
        control={control || undefined}
        name={name}
        render={({ field }) => (
          <div className='customDatePickerWidth'>
            <DatePicker
              className={clsx(
                'h-[68px] w-full p-4 bg-tertiary-600 bg-opacity-5 rounded-lg placeholder:text-tertiary-600 opacity-50 placeholder:text-sm outline-none',
                hasError && 'border-red-500',
                className
              )}
              // formatWeekDay={(day) => dayjs(day).format('ddd')}
              placeholderText={placeholder}
              closeOnScroll={true}
              selected={field.value}
              dateFormat='MMMM d, yyyy'
              name={name}
              onChange={(date) => field.onChange(date)}
              showMonthDropdown
              autoComplete='off'
              showYearDropdown
              dropdownMode='select'
              isClearable
              ref={(elem) =>
                elem &&
                field.ref(
                  (elem as unknown as { input: HTMLInputElement }).input
                )
              }
              {...props}
            />
          </div>
        )}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
