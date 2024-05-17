import React, { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  validate?: {
    error: boolean
    message: string
  }
}

const TextAreaComponent: React.FC<Props> = ({ title, validate, ...inputProps }) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {title}
      </label>
      <textarea
        {...inputProps}
        className={`appearance-none block w-full bg-gray-100 ${validate?.error && 'border-red-500'} text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id="grid-first-name"
      />
      <p className="text-red-500 text-xs italic">{validate?.message}</p>
    </>
  );
};

export default TextAreaComponent;
