"use client";

import CardProperti from "@/app/(dashboard)/components/CardProperti";
import CardPropertiDetail from "@/app/(dashboard)/components/CardPropertiDetail";
import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import { UnitModel } from "@/models/unit-model";
import { PerumahanResponse } from "@/modules/perumahan/models/perumahan-model";
import {
  GetPerumahanByIdCase,
  GetUnitsPerumahanCase,
} from "@/modules/perumahan/usecases/perumahan/perumahan.usecase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPerumahanPage({
  params,
}: {
  params: { id: number };
}) {
  const router = useRouter();

  const [data, setData] = useState<PerumahanResponse>();
  const [units, setUnits] = useState<UnitModel[]>();

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

  useEffect(() => {
    getPerumahan().then(() => {
      getUnits();
    });
  }, []);

  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-white flex items-center pb-2 pr-2  border-blue-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            {data?.name}
          </a>
        </div>
        {/* <div className="text-[#041252] flex items-center pb-2 pr-2 border-b-2 border-[#041252] uppercase">
          <a href="#" className="font-semibold inline-block">
            Kontrakan
          </a>
        </div>
        <div className="text-[#041252] flex items-center pb-2 pr-2 border-b-2 border-[#041252] uppercase">
          <a href="#" className="font-semibold inline-block">
            Kostan
          </a>
        </div> */}
        <div className="flex flex-row space-x-2">
          <Link
            href="/dashboard/perumahan/add-unit"
            className=" p-2 rounded bg-green-500 text-center font-bold text-white mb-1 hover:text-slate-200"
          >
            {" "}
            Tambah Unit +{" "}
          </Link>
          <Link
            href="/dashboard/perumahan/edit-perumahan"
            className=" p-2 rounded bg-blue-500 text-center font-bold text-white mb-1 hover:text-slate-200"
          >
            {" "}
            Edit Perumahan{" "}
          </Link>
          <Link
            href="/dashboard/perumahan/add"
            className=" p-2 rounded bg-red-500 text-center font-bold text-white mb-1 hover:text-slate-200"
          >
            {" "}
            Hapus Perumahan{" "}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-52">
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
    </WrapperDashboard>
  );
}
