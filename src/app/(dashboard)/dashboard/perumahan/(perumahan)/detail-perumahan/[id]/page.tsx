"use client";

import CardProperti from "@/app/(dashboard)/components/CardProperti";
import CardPropertiDetail from "@/app/(dashboard)/components/CardPropertiDetail";
import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import GlobalAlert from "@/components/GlobalAlert";
import { UnitModel } from "@/models/unit-model";
import { PerumahanResponse } from "@/modules/perumahan/models/perumahan-model";
import {
  DeletePerumahanCase,
  GetPerumahanByIdCase,
  GetUnitsPerumahanCase,
} from "@/modules/perumahan/usecases/perumahan/perumahan.usecase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";

export default function DetailPerumahanPage({
  params,
}: {
  params: { id: number };
}) {
  const router = useRouter();

  const [data, setData] = useState<PerumahanResponse>();
  const [units, setUnits] = useState<UnitModel[]>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const getPerumahan = async () => {
    const res = await GetPerumahanByIdCase(params.id);

    if (res.success) {
      setData(res.data!);
    } else {
      setData(undefined);
    }
  };

  const getUnits = async () => {
    const res = await GetUnitsPerumahanCase(params.id);

    if (res.success) {
      setUnits(res.data!);
    } else {
      setUnits(undefined);
    }
  };

  const handleDelete = async () => {
    if (params?.id) {
      const res = await DeletePerumahanCase(params?.id);
      if (res.success) {
        toast.success("Berhasil menghapus data");
        router.push(`/dashboard/perumahan`);
      } else {
        toast.error(res.message);
      }
    }
  };

  useEffect(() => {
    getPerumahan().then(() => {
      getUnits();
    });
  }, []);

  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex flex-col md:flex-row justify-between text-sm">
        <div className="text-black flex items-center pb-2 pr-2  border-blue-600 uppercase">
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
          <p className="font-semibold inline-block ml-10">{data?.name}</p>
        </div>
        <div className="flex flex-row space-x-2">
          <button
            // href={`/dashboard/perumahan/add-unit/${params.id}`}
            onClick={() => {
              router.push(`/dashboard/perumahan/add-unit/${params.id}`);
            }}
            className="p-1 md:p-2 rounded bg-green-500 text-center font-bold text-white mb-1 hover:text-slate-200"
          >
            {" "}
            Tambah Unit{" "}
          </button>
          <Link
            href={`/dashboard/perumahan/edit-perumahan/${params.id}`}
            className="p-1 md:p-2 rounded bg-blue-500 text-center font-bold text-white mb-1 hover:text-slate-200"
          >
            {" "}
            Edit Perumahan{" "}
          </Link>
          <button
            className="p-1 md:p-2 rounded bg-red-500 text-center font-bold text-white mb-1 hover:text-slate-200"
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            {" "}
            Hapus Perumahan{" "}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:mx-52">
        {units?.map((item, index) => {
          return (
            <CardPropertiDetail
              key={index}
              onClick={() => {
                router.push(`/dashboard/perumahan/detail-unit/${item.id}`);
              }}
              type="Perumahan"
              data={item}
            />
          );
        })}
      </div>
      <GlobalAlert
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
        onSubmit={() => handleDelete()}
      />
    </WrapperDashboard>
  );
}
