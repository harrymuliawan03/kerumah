"use client";

import Link from "next/link";
import CardProperti from "../../components/CardProperti";
import WrapperDashboard from "../../components/wrapper/WrapperDashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { KostanResponse } from "@/modules/kostan/models/kostan-model";
import { GetKostanCase } from "@/modules/kostan/usecases/kostan/kostan.usecase";

export default function KostanPage() {
  const router = useRouter();
  const [data, setData] = useState<KostanResponse[]>();

  const getKostan = async () => {
    const res = await GetKostanCase();

    if (res.success) {
      setData(res.data!);
    } else {
      setData(undefined);
    }
  };

  useEffect(() => {
    getKostan();
  }, []);

  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-black flex items-center pb-2 pr-2 border-blue-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Kostan
          </a>
        </div>
        {/* <div className="text-[#041252] flex items-center pb-2 pr-2 border-b-2 border-[#041252] uppercase">
          <a href="#" className="font-semibold inline-block">
            Kostan
          </a>
        </div>
        <div className="text-[#041252] flex items-center pb-2 pr-2 border-b-2 border-[#041252] uppercase">
          <a href="#" className="font-semibold inline-block">
            Kostan
          </a>
        </div> */}
        <Link
          href="/dashboard/kostan/add-kostan"
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
              type="Kostan"
              onClick={() => {
                router.push(`/dashboard/kostan/detail-kostan/${item.id}`);
              }}
            />
          );
        })}
      </div>
    </WrapperDashboard>
  );
}
