import Link from "next/link";
import CardProperti from "../../components/CardProperti";
import WrapperDashboard from "../../components/wrapper/WrapperDashboard";

export default function KostanPage() {
  return (
    <WrapperDashboard>
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-white flex items-center pb-2 pr-2  border-blue-600 uppercase">
          <a href="#" className="font-semibold inline-block">
            Kostan
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
          href="/dashboard/kostan/add"
          className=" p-2 rounded bg-green-500 text-center font-bold text-white mb-1 hover:text-slate-200"
        >
          {" "}
          Tambah Data +{" "}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <CardProperti />
        <CardProperti />
        <CardProperti />
      </div>
    </WrapperDashboard>
  );
}
