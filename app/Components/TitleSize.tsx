"use client";
import React from "react";
import Menudropdown from "./Menudropdown";

const TitleSize = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-[12px] font-[500] text-[#303030] ">Tittle Size</p>
        </div>
        <div>
          <Menudropdown name="Small" />
        </div>
      </div>
    </>
  );
};

export default TitleSize;
