"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { provinces } from "@/constants/provinces";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const AddUnitPage: React.FC = () => {
  const router = useRouter();

  return (
    <WrapperDashboard>
      <form className="w-full">
        <div className="relative flex justify-center items-center w-full mb-10">
          <div
            className="absolute left-0 cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <FaArrowLeft
              style={{
                color: "black",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-[#0D1857]">Tambah Unit</h1>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Jumlah Unit"
              onChange={() => {}}
              type="number"
            />
          </div>
          <div className="flex w-full md:w-1/2 justify-start my-5 items-center space-x-5">
            <button
              type="submit"
              className="py-2 px-3 rounded  text-white bg-blue-500 font-bold"
            >
              Submit
            </button>
            <div
              className="py-2 px-3 rounded  text-black bg-white font-bold cursor-pointer"
              onClick={() => {
                router.back();
              }}
            >
              Cancel
            </div>
          </div>
        </div>
      </form>
    </WrapperDashboard>
  );
};

export default AddUnitPage;
