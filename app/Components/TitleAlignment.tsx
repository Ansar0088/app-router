"use client";
import React from "react";
import { Belicon, Mid, Lst } from "../Assets/Svgs/page";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const TitleAlignment = () => {
  const Divider = [{ icon: <Belicon /> }, { icon: <Mid /> }, { icon: <Lst /> }];
  const [state, setState] = useState("");

  return (
    <>
      <div className="flex items-center w-[230px]  justify-between mt-1">
        <div>
          <p className="text-[12px] font-[500]  mt-4 text-[#303030] ">
            Title Alignment
          </p>
        </div>
        <div>
          <Tabs className="flex-1">
            <div className="h-[30px]  mt-2">
              <TabsList className="grid grid-cols-3 p-0 h-[30px] bg-[#F3F3F3] ">
                {Divider.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    value={`tab-${index}`}
                    className="relative flex items-center justify-center cursor-pointer"
                    onClick={() => setState(`tab-${index}`)}
                  >
                    {state === `tab-${index}` ? (
                      <motion.div
                        className="underline absolute inset-0 bg-white  text-black rounded-md"
                        layoutId="bubble"
                      ></motion.div>
                    ) : null}
                    <span className="text-xs z-10">{item.icon}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default TitleAlignment;
