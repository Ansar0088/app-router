"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function BasicTabs() {
  const [state, setState] = useState("");

  return (
    <>
      <div>
        <Tabs className="flex-1">
          <div className=" h-[30px]  w-[227px] p-1.5">
            <TabsList className="grid grid-cols-2 p-0 h-[33px] bg-[#F3F3F3]">
              <TabsTrigger
                value="insert"
                className="relative flex items-center justify-center cursor-pointer  "
                onClick={() => setState("account")}
              >
                {state == "account" ? (
                  <motion.div
                    className="underline absolute inset-0  bg-white  text-black rounded-md"
                    layoutId="bubble"
                  ></motion.div>
                ) : null}
                <span className="text-xs z-10">Basic</span>
              </TabsTrigger>
              <TabsTrigger
                value="edit"
                className="relative flex items-center justify-center  cursor-pointer"
                onClick={() => setState("password")}
              >
                {state == "password" ? (
                  <motion.div
                    className="underline absolute inset-0  bg-white  text-black rounded-md"
                    layoutId="bubble"
                  ></motion.div>
                ) : null}
                <span className="text-xs z-10">Advance</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
      <hr className="w-[230px]  mt-4" />
     
    </>
  );
}

export default BasicTabs;
