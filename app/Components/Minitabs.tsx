"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TabsAnimate() {
  const [state, setState] = useState("account");

  return (
    <Tabs className="flex-1">
      <div className="h-[30px] w-[121px]">
        <TabsList className="grid grid-cols-2 p-0 h-[30px] bg-[#F3F3F3] px-1">
          <TabsTrigger
            value="insert"
            className="relative flex items-center justify-center cursor-pointer"
            onClick={() => setState("account")}
          >
            {state === "account" && (
              <motion.div
                className="underline absolute inset-0 bg-white  text-black rounded-md"
                layoutId="bubble"
              ></motion.div>
            )}
            <span
              className={`text-xs z-10 ${
                state === "account" ? "text-[#342AEF]" : "text-[#888888]"
              }`}
            >
              
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="edit"
            className="relative flex items-center justify-center cursor-pointer"
            onClick={() => setState("password")}
          >
            {state === "password" && (
              <motion.div
                className={`underline absolute inset-0 bg-white  border rounded-md ${
                  state === "password" ? "text-[#342AEF]" : "text-gray-200"
                }`}
                layoutId="bubble"
              ></motion.div>
            )}
            <span
              className={`text-xs z-10 ${
                state === "password" ? "text-[#0099FF]" : "text-[#888888]"
              }`}
            >
              Yes
            </span>
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
}
