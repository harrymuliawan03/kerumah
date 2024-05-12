"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { periode } from "@/constants/periode";
import { provinces } from "@/constants/provinces";
import { UnitModel } from "@/models/unit-model";
import { GetUnitByIdCase } from "@/modules/perumahan/usecases/perumahan/perumahan.usecase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const DetailUnitPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [unit, setUnit] = useState<UnitModel>();

  const getUnit = async () => {
    const res = await GetUnitByIdCase(params.id);

    if (res.success) {
      setUnit(res.data!);
    } else {
      setUnit(undefined);
    }
  };

  useEffect(() => {
    getUnit();
  }, []);

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
          <h1 className="font-bold text-2xl text-[#0D1857]">{unit?.name}</h1>
          <div className="absolute right-0 cursor-pointer">
            <div className="hidden md:flex flex-row space-x-2">
              <Link
                href={`/dashboard/perumahan/edit-unit/${params.id}`}
                className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
              >
                {" "}
                Edit{" "}
              </Link>
              <Link
                href="/dashboard/perumahan/edit-unit"
                className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
              >
                {" "}
                Bayar{" "}
              </Link>
              <Link
                href="/dashboard/perumahan/add"
                className=" p-2 rounded bg-red-500 text-center font-bold text-white hover:text-slate-200"
              >
                {" "}
                Arsipkan{" "}
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
            href="/dashboard/perumahan/edit-unit"
            className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
          >
            {" "}
            Bayar{" "}
          </Link>
          <Link
            href="/dashboard/perumahan/add"
            className=" p-2 rounded bg-red-500 text-center font-bold text-white hover:text-slate-200"
          >
            {" "}
            Arsipkan{" "}
          </Link>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              value={unit?.status}
              title="Status"
              onChange={() => {}}
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent
              data={periode}
              selected={unit?.periode_pembayaran ?? "year"}
              title="Periode Pembayaran"
              value={unit?.provinsi ?? "Belum diisi"}
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Unit"
              value={unit?.name}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <InputComponent
              title="Nama Penghuni"
              value={unit?.nama_penghuni ?? ""}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputComponent
              title="No. Identitas (NIK, SIM)"
              value={unit?.no_identitas ?? ""}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <TextAreaComponent
              title="Alamat"
              value={unit?.alamat ?? ""}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent
              selected={unit?.provinsi ?? ""}
              data={provinces}
              title="Provinsi"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent
              selected={unit?.kota ?? ""}
              data={provinces}
              title="Kota"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Pos"
              onChange={() => {}}
              value={unit?.kode_pos ?? ""}
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
              value={unit?.tanggal_mulai ?? ""}
              type="date"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Tanggal Jatuh Tempo"
              value={unit?.tanggal_jatuh_tempo ?? ""}
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
