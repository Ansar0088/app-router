"use client";
import React from "react";
import BasicTabs from "../Components/BasicTabs";
import Menudropdown from "../Components/Menudropdown";

const page = () => {
  return (
    <>
      <BasicTabs />
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">Edit Divider</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-[12px] font-[500] text-[#303030] ">Divider Type</p>
        </div>
        <div>
          <Menudropdown name="Custom" />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-[110px] bg-[#342AEF] rounded-[6px] mt-2 text-white h-[30px] text-[12px]">
          Upload Custom
        </button>
      </div>
    </>
  );
};

export default page;
