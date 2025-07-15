

import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  InputClass?: string;
  placeholder: string;
  required?: boolean;
  type: 'text' | 'email' | 'button';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, InputClass, placeholder, type = 'text', required = false, ...rest }, ref) => {
    const baseClass = 'w-full rounded-xl py-5 px-5 bg-[#F6F7F9] outline-none';

    return (
      <div className='flex flex-col gap-2'>
        {label && <label htmlFor={rest.name}>{label}</label>}
        <input
          type={type}
          id={rest.name}
          className={clsx(baseClass, InputClass)}
          placeholder={placeholder}
          required={required}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

// ✅ This is required for proper type detection
Input.displayName = 'Input';

export default Input;
