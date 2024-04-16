"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { provinces } from "@/constants/provinces";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const EditPerumahanPage: React.FC = () => {
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
          <h1 className="font-bold text-2xl text-[#0D1857]">Edit Perumahan</h1>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <InputComponent title="Nama Perusahaan" onChange={() => {}} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <TextAreaComponent title="Alamat" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent data={provinces} title="Provinsi" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent data={provinces} title="Kota" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Pos"
              onChange={() => {}}
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Jumlah Unit"
              onChange={() => {}}
              type="number"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent data={provinces} title="Periode Pembayaran" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent title="Kode Unit" onChange={() => {}} />
          </div>
        </div>
        <div className="flex w-full justify-center my-5 items-center space-x-5">
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
      </form>
    </WrapperDashboard>
  );
};

export default EditPerumahanPage;
