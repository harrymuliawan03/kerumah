"use client";

import { CalculationDataResponse } from "@/modules/dashboard/models/dashboard-model";
import { GetCalculationDataCase } from "@/modules/dashboard/usecases/dashboard/dashboard.usecase";
import React, { useEffect, useState } from "react";
import { FaClock, FaDoorOpen, FaHome, FaRestroom } from "react-icons/fa";
import Chart from "../components/Chart";
import WrapperDashboard from "../components/wrapper/WrapperDashboard";

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<CalculationDataResponse | null>();

  const getCalculationData = async () => {
    const res = await GetCalculationDataCase();

    if (res.success) {
      setData(res.data);
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    getCalculationData();
  }, []);

  return (
    <WrapperDashboard>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Total Properti</p>
            <p className="font-bold text-2xl">{data?.total_properties}</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaHome style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div>
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Total Ruangan</p>
            <p className="font-bold text-2xl">{data?.total_units}</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaRestroom style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div>
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Ruangan Tersedia</p>
            <p className="font-bold text-2xl">{data?.available_units}</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaDoorOpen style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div>
        {/* <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Ruangan Terisi</p>
            <p className="font-bold text-2xl">5</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaClock style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div> */}
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">
              Pembayaran Terlambat
            </p>
            <p className="font-bold text-2xl">{data?.late_payment_count}</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaClock style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div>
        {/* <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">
              Ruangan Tidak Aktif
            </p>
            <p className="font-bold text-2xl">5</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaDoorOpen style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div> */}
      </div>

      <div className="w-full h-96 mb-4 bg-gray-50">
        <Chart
          labels={data?.labels ?? []}
          title="Pembayaran Terlambat"
          data={data?.list_payment_late ?? []}
        />
      </div>
      <div className="w-full h-96 mb-4 bg-gray-50">
        <Chart
          labels={data?.labels ?? []}
          title="History Ruangan Kosong"
          data={data?.list_empty_properties ?? []}
        />
      </div>

      {/* <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-56">
          <Chart />
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-56">
          <Chart />
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-56">
          <Chart />
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-56">
          <Chart />
        </div>
      </div> */}
    </WrapperDashboard>
  );
};

export default DashboardPage;
