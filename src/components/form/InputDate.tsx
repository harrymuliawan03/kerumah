import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import DatePicker from "react-datepicker";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  validate?: {
    error: boolean;
    message: string;
  };
}

const InputDateComponent: React.FC<Props> = ({
  title,
  validate,
  ...inputProps
}) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const ExampleCustomInput = forwardRef(
    (
      { value, onClick }: any,
      ref: React.LegacyRef<HTMLDivElement> | undefined
    ) => (
      <div
        className={`appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        onClick={onClick}
        ref={ref}
      >
        {value}
      </div>
    )
  );

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={title}
      >
        {title}
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date ?? startDate);
        }}
        dateFormat="yyyy/MM/dd"
        // className="bg-red-500 border"
        wrapperClassName="w-full"
        disabled
        customInput={<ExampleCustomInput />}
      />
      <p className="text-red-500 text-xs italic">{validate?.message}</p>
    </>
  );
};

export default InputDateComponent;
