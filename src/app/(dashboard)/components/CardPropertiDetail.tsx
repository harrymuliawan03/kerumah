"use client";

import React from "react";

type Props = {
  onClick?: () => void;
};

const CardPropertiDetail: React.FC<Props> = (props) => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer"
      onClick={() => props.onClick?.()}
    >
      <div className="relative">
        <div>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-white opacity-25"></div>
        </div>
        <div>
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            Cooking
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPropertiDetail;
