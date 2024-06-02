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
              ? "bg-blue-500"
              : props.data.status == "paid_off"
              ? "bg-purple-500"
              : "bg-red-500"
          } flex flex-col justify-center items-center`}
        >
          <h1 className="font-bold text-[26px] text-white">
            {props.data.name}
          </h1>
          {props.data.status != "empty" && props.data.status != "paid_off" && (
            <>
              {props.data.purchase_type && (
                <p className="p-1 bg-blue-500 text-white rounded-xl justify-self-end">
                  ({props.data.purchase_type})
                </p>
              )}
              <div className="flex flex-col">
                {props.data.tanggal_jatuh_tempo && (
                  <p className="p-1 bg-blue-500 text-white rounded-xl justify-self-end">
                    Jatuh tempo : {props.data.tanggal_jatuh_tempo}
                  </p>
                )}
                {props.data.tenor && (
                  <p className="p-1 bg-blue-500 text-white rounded-xl justify-self-end">
                    Tenor : {props.data.tenor}
                  </p>
                )}
                {props.data.angsuran_no && (
                  <p className="p-1 bg-blue-500 text-white rounded-xl justify-self-end">
                    Angsuran ke : {props.data.angsuran_no}
                  </p>
                )}
              </div>
            </>
          )}
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
