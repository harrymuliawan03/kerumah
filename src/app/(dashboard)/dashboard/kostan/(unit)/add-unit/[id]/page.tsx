"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import { CreateUnitKostanCase } from "@/modules/kostan/usecases/kostan/kostan.usecase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const AddUnitPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [jmlUnit, setJmlUnit] = useState<number>();

  const handleCreateUnit = async () => {
    if (jmlUnit) {
      const res = await CreateUnitKostanCase({
        id_parent: params.id,
        jumlah_unit: jmlUnit,
        type: "kostan",
      });
      if (res.success) {
        toast.success("Berhasil membuat unit");
        router.push(`/dashboard/kostan/detail-kostan/${params.id}`);
      } else {
        toast.error("Gagal membuat unit");
      }
    }
  };

  return (
    <WrapperDashboard>
      <div className="w-full">
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
              onChange={(t) => {
                setJmlUnit(parseInt(t.target.value));
              }}
              type="number"
            />
          </div>
          <div className="flex w-full md:w-1/2 justify-start my-5 items-center space-x-5">
            <button
              className="py-2 px-3 rounded  text-white bg-blue-500 font-bold"
              onClick={() => handleCreateUnit()}
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
      </div>
    </WrapperDashboard>
  );
};

export default AddUnitPage;
