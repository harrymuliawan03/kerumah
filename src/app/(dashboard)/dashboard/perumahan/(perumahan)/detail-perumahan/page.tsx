"use client";

import CardProperti from "@/app/(dashboard)/components/CardProperti";
import CardPropertiDetail from "@/app/(dashboard)/components/CardPropertiDetail";
import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PerumahanPage() {
  const router = useRouter();

  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-white flex items-center pb-2 pr-2  border-blue-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Perumahan Meruya Utara
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <CardPropertiDetail
          onClick={() => {
            router.push("/dashboard/perumahan/detail-unit");
          }}
        />
        <CardPropertiDetail />
        <CardPropertiDetail />
      </div>
    </WrapperDashboard>
  );
}
