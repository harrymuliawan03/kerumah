"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { provinces } from "@/constants/provinces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const DetailUnitPage: React.FC = () => {
  const router = useRouter();

  return (
    <WrapperDashboard>
      <form className="w-full">
        <div className="relative flex justify-center items-center w-full mb-4 md:mb-10">
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
          <h1 className="font-bold text-2xl text-[#0D1857]">Unit MB01</h1>
          <div className="absolute right-0 cursor-pointer">
            <div className="hidden md:flex flex-row space-x-2">
              <Link
                href="/dashboard/perumahan/edit-unit"
                className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
              >
                {" "}
                Edit{" "}
              </Link>
              <Link
                href="/dashboard/perumahan/add"
                className=" p-2 rounded bg-red-500 text-center font-bold text-white hover:text-slate-200"
              >
                {" "}
                Hapus{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-row justify-center space-x-2">
          <Link
            href="/dashboard/perumahan/edit-unit"
            className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
          >
            {" "}
            Edit{" "}
          </Link>
          <Link
            href="/dashboard/perumahan/add"
            className=" p-2 rounded bg-red-500 text-center font-bold text-white hover:text-slate-200"
          >
            {" "}
            Hapus{" "}
          </Link>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent title="Status" onChange={() => {}} disabled />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent
              data={provinces}
              title="Periode Pembayaran"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent title="Kode Unit" onChange={() => {}} disabled />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <InputComponent
              title="Nama Penghuni"
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Nama Penghuni"
              onChange={() => {}}
              disabled
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <InputComponent
              title="No. Identitas (NIK, SIM)"
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <TextAreaComponent title="Alamat" disabled />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent data={provinces} title="Provinsi" disabled />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent data={provinces} title="Kota" disabled />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Pos"
              onChange={() => {}}
              type="number"
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Tanggal Mulai Kontrak"
              onChange={() => {}}
              type="date"
              disabled
            />
          </div>
        </div>
        {/* <div className="flex w-full justify-center my-5 items-center space-x-5">
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
        </div> */}
      </form>
    </WrapperDashboard>
  );
};

export default DetailUnitPage;
