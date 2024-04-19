"use client";

import React from "react";
import { FaClock, FaDoorOpen, FaHome, FaRestroom } from "react-icons/fa";
import Chart from "../components/Chart";
import WrapperDashboard from "../components/wrapper/WrapperDashboard";

const DashboardPage: React.FC = () => {
  return (
    <WrapperDashboard>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Total Properti</p>
            <p className="font-bold text-2xl">5</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaHome style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div>
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Total Ruangan</p>
            <p className="font-bold text-2xl">5</p>
          </div>
          <div className="bg-[#7BCBD4] p-2 rounded-2xl">
            <FaRestroom style={{ height: 30, width: 30, color: "white" }} />
          </div>
        </div>
        <div className="flex items-center justify-between h-24 rounded-xl bg-white p-5">
          <div className="flex flex-col text-black w-1/2">
            <p className="font-bold text-gray-400 text-sm">Ruangan Tersedia</p>
            <p className="font-bold text-2xl">5</p>
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
            <p className="font-bold text-2xl">5</p>
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
        <Chart />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
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
      </div>
      {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
               <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
               <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
               <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
               <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
         </div> */}
    </WrapperDashboard>
  );
};

export default DashboardPage;
