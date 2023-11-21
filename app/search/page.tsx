"use client";
import React from "react";
import { Sharp, Find, Rounded, Fulround } from "../Assets/Svgs/page";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import BasicTabs from "../Components/BasicTabs";

const Page = ({list}:{list:any[]}) => {
  const Divider = [
    { icon: <Sharp /> },
    { icon: <Rounded /> },
    { icon: <Fulround /> },
    { icon: <Find /> },
  ];       
  const [state, setState] = useState("");

  return (
    <>
      <BasicTabs />
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">Edit Search</p>
      </div>
      <p className="text-xs font[700] text-[#333333] mt-2">Search Style</p>
      <Tabs className="flex-1">
        <div className="h-[30px] w-[221px]  mt-2">
          <TabsList className="grid grid-cols-4 p-0 h-[30px] bg-[#F3F3F3] ">
            {Divider.map((item, index) => (
              <TabsTrigger
                key={index}
                value={`tab-${index}`}
                className="relative flex items-center justify-center cursor-pointer"
                onClick={() => setState(`tab-${index}`)}
              >
                {state === `tab-${index}` ? (
                  <motion.div
                    className="underline absolute inset-0 bg-white active:text-[#F4B428] text-black rounded-md"
                    layoutId="bubble"
                  ></motion.div>
                ) : null}
                <span className="text-xs z-10">{item.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </>
  );
};

export default Page;
