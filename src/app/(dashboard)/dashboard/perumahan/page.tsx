"use client";

import Link from "next/link";
import CardProperti from "../../components/CardProperti";
import WrapperDashboard from "../../components/wrapper/WrapperDashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PerumahanResponse } from "@/modules/perumahan/models/perumahan-model";
import { GetPerumahanCase } from "@/modules/perumahan/usecases/perumahan/perumahan.usecase";

export default function PerumahanPage() {
  const router = useRouter();
  const [data, setData] = useState<PerumahanResponse[]>();

  const getPerumahan = async () => {
    const res = await GetPerumahanCase();

    if (res.success) {
      setData(res.data!);
    } else {
      setData(undefined);
    }
  };

  useEffect(() => {
    getPerumahan();
  }, []);

  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-white flex items-center pb-2 pr-2  border-blue-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Perumahan
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
        <Link
          href="/dashboard/perumahan/add-perumahan"
          className=" p-2 rounded bg-green-500 text-center font-bold text-white mb-1 hover:text-slate-200"
        >
          {" "}
          Tambah Data +{" "}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item, index) => {
          return (
            <CardProperti
              key={index}
              data={item}
              type="Perumahan"
              onClick={() => {
                router.push(`/dashboard/perumahan/detail-perumahan/${item.id}`);
              }}
            />
          );
        })}
      </div>
    </WrapperDashboard>
  );
}
