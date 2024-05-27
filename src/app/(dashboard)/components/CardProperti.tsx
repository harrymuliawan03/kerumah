"use client";

import { PropertyModel } from "@/models/property-model";
import Image from "next/image";
import React from "react";

type Props = {
  onClick?: () => void;
  type: "Perumahan" | "Kontrakan" | "Kostan";
  data: PropertyModel;
};

const CardProperti: React.FC<Props> = (props) => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer"
      onClick={() => props.onClick?.()}
    >
      <div className="relative">
        <div className="w-full h-72">
          <Image
            src="/assets/images/perumahan1.jpeg"
            fill
            // width={500}
            // height={70}
            alt={props.type}
          />
          {/* <img
            className="w-full"
            src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            alt="Sunset in the mountains"
          /> */}
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-white opacity-25"></div>
        </div>
        <div>
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 rounded-md text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {props.type}
          </div>
        </div>
      </div>
      <div className="px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-2 py-4 bg-slate-500">
        <div className="p-2 bg-[#f4c441] shadow-lg flex flex-col items-center text-white rounded-xl">
          <p>Ruangan</p>
          <p>{props.data.unit_count}</p>
        </div>
        <div className="p-2 bg-[#a745f3] shadow-lg flex flex-col items-center text-white rounded-xl">
          <p>Terisi</p>
          <p>{props.data.unit_filled}</p>
        </div>
        <div className="p-2 bg-[#47ee8f] shadow-lg flex flex-col items-center text-white rounded-xl">
          <p>Tersedia</p>
          <p>{props.data.unit_available}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProperti;
