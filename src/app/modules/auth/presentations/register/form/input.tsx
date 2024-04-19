import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const InputComponentAuth: React.FC<Props> = ({ title, ...inputProps }) => {
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {title}
      </label>
      <input
        {...inputProps}
        className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
        // className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
        id="grid-first-name"
      />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </>
  );
};

export default InputComponentAuth;
