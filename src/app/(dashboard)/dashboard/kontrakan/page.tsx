"use client";

import Link from "next/link";
import CardProperti from "../../components/CardProperti";
import WrapperDashboard from "../../components/wrapper/WrapperDashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { KontrakanResponse } from "@/modules/kontrakan/models/kontrakan-model";
import { GetKontrakanCase } from "@/modules/kontrakan/usecases/kontrakan/kontrakan.usecase";

export default function KontrakanPage() {
  const router = useRouter();
  const [data, setData] = useState<KontrakanResponse[]>();

  const getKontrakan = async () => {
    const res = await GetKontrakanCase();

    if (res.success) {
      setData(res.data!);
    } else {
      setData(undefined);
    }
  };

  useEffect(() => {
    getKontrakan();
  }, []);

  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-black flex items-center pb-2 pr-2 border-blue-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Kontrakan
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
          href="/dashboard/kontrakan/add-kontrakan"
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
              type="Kontrakan"
              onClick={() => {
                router.push(`/dashboard/kontrakan/detail-kontrakan/${item.id}`);
              }}
            />
          );
        })}
      </div>
    </WrapperDashboard>
  );
}
