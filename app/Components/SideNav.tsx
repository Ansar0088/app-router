import React from "react";
import { AdjustmentsVerticalIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Comp1 = () => {
  return (
    <>
      <div className="bg-[#1E1F22] p-2  h-screen   w-fit">
        <div className="w-12 mx-1 p-2 mt-3 rounded-2xl  bg-[#5865F2]  hover:bg-[#5865F2] hover:rounded-2xl cursor-pointer group transition-all mb-2">
          <BiLogoDiscordAlt className="text-white  w-8 text-3xl" />
        </div>
        <Image
          src="/Assets/line.png"
          width={40}
          height={2}
          className="mx-2"
          alt="Picture of the author"
        />
        <div className="w-12 mx-1 rounded-3xl flex justify-center p-3 mt-1  bg-[#35373C] hover:bg-green-600 hover:rounded-2xl cursor-pointer group transition-all ">
          <PlusIcon className=" text-green-600 group-hover:text-white relative group" />
          <div className="absolute left-16 hidden z-0 group-hover:inline ml-2  bg-black text-white px-2 py-1 font-[600]  rounded shadow">
            {/* <BiSolidLeftArrow style={{color:"black",position:"relative",right:"17px",top:"10px"}}/> */}
            Add a Server
          </div>
        </div>
        <div className=" w-12 bg-green mx-1 flex justify-center rounded-3xl p-3 mt-3  bg-[#35373C] hover:bg-green-600 hover:rounded-2xl cursor-pointer group transition-all ">
          <AdjustmentsVerticalIcon className=" text-green-600 group-hover:text-white" />
          <div className="absolute left-16 hidden  group-hover:inline ml-2  bg-black text-white mb-3 px-2 py-1 font-[600]  rounded shadow">
            Explore Discoverable
            <br /> Servers.
          </div>
        </div>
        <Image
          src="/Assets/line.png"
          width={40}
          height={2}
          className="mx-2"
          alt="Picture of the author"
        />
        <div className=" w-12 bg-green flex justify-center mx-1 rounded-3xl p-3 mt-1  bg-[#35373C] hover:bg-green-600  hover:rounded-2xl cursor-pointer group transition-all ">
          <ArrowDownTrayIcon className=" text-green-600 group-hover:text-white" />
          <div className="absolute left-16 hidden  group-hover:inline ml-2  bg-black text-white px-2 py-1 font-[600]  rounded shadow">
            Download Apps
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp1;
