import React, { InputHTMLAttributes, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type?: "text" | "password" | "email" | "number";
  isPassword?: boolean;
}

const InputComponentAuth: React.FC<Props> = ({
  title,
  isPassword,
  type = "text",
  ...inputProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={inputProps.id}
      >
        {title}
      </label>
      <div className="relative">
        <input
          {...inputProps}
          type={isPasswordVisible ? "text" : type}
          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
          >
            {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        )}
      </div>
    </>
  );
};

export default InputComponentAuth;
