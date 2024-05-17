import React, { SelectHTMLAttributes, useEffect } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  data: { id?: string; nama: string }[];
  selected: string;
  validate?: {
    error: boolean
    message: string
  }
}

const SelectComponent: React.FC<Props> = ({
  title,
  data,
  selected,
  validate,
  ...inputProps
}) => {

  let isSelected = data?.filter((item) => item.nama == selected).length > 0;

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-state"
      >
        {title}
      </label>
      <div className="relative">
        <select
          className={`block appearance-none w-full bg-gray-100 border ${validate?.error ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white `}
          id="grid-state"
          {...inputProps}
        >
          {!isSelected && 
          <option disabled selected>
            Belum ada data terpilih
            </option>}
          {data.map((item, index) => {
            if (selected == item.nama) {
              return (
                <option key={item.id} selected>
                  {item.nama}
                </option>
              );
            }
            return <option key={item.id}>{item.nama}</option>;
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      <p className="text-red-500 text-xs italic">{validate?.message}</p>
      </div>
    </>
  );
};

export default SelectComponent;
