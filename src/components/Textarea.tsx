
import clsx from 'clsx';
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  InputClass?: string;
  placeholder: string;
  rows: number;
  required?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, InputClass, placeholder, rows, required = false, ...rest }, ref) {
    const baseClass = 'w-full rounded-xl py-2 px-4 bg-[#F6F7F9] outline-none resize-none';
    
    const id = rest.name || 'custom-textarea';

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          className={clsx(baseClass, InputClass)}
          placeholder={placeholder}
          rows={rows}
          required={required}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;





// import clsx from 'clsx';
// import React from 'react'


// interface TextareaProps extends React.TextareaHTMLAttributes <HTMLTextAreaElement>{
//       label: string;
//       InputClass?: string;
//       placeholder: string;
//       rows: number;
//       required?: boolean;
// }



// const Textarea = React.forwardRef<HTMLTextAreaElement , TextareaProps>({label,InputClass,placeholder,rows,required=false, ...rest}, ref) => {
// const baseClass = 'w-full rounded-xl py-2 px-4 bg-[#F6F7F9] outline-none resize-none'

//  const id = rest.name || 'custom-textarea';
//   return (
//     <div className='flex flex-col gap-2'>
//       <label htmlFor={id}>{label}</label>
//       <textarea id={id} className={clsx(baseClass,InputClass)} placeholder={placeholder} rows={rows} required={required} ref={ref} {...rest}/>
//     </div>
//   )

// }

// Textarea.displayName = 'Textarea';

// export default Textarea

