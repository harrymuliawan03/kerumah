"use client";

import { UnitModel } from "@/models/unit-model";
import React from "react";

type Props = {
  onClick?: () => void;
  type: "Perumahan" | "Kontrakan" | "Kostan";
  data: UnitModel;
};

const CardPropertiDetail: React.FC<Props> = (props) => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer"
      onClick={() => props.onClick?.()}
    >
      <div className="relative flex justify-center items-center">
        <div
          className={`w-full h-[200px] ${
            props.data.status == "empty"
              ? "bg-green-500"
              : props.data.status == "filled"
              ? "bg-red-500"
              : "bg-purple-500"
          } flex justify-center items-center`}
        >
          <h1 className="font-bold text-[26px] text-white">
            {props.data.name}
          </h1>
        </div>
        <div>
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 rounded-lg font-bold uppercase text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {props.data.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPropertiDetail;