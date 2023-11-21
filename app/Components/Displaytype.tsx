import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Big, Large, Midle } from "../Assets/Svgs/page";

const Displaytype = () => {
  const Divider = [{ text:<Big/> },{ text: <Large/>},{ text:<Midle/> },];
  const [state, setState] = useState("");

  return (
    <>
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-xs">Display Type</p>
        </div>
        <div>
          <Tabs className="flex-1">
            <div className="h-[30px] w-[121px] ">
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
                    <span
                      className={`text-xs z-10  ${
                        state === `tab-${index}`
                          ? "text-[#0099FF]"
                          : "text-[#888888]"
                      }`}
                    >
                      {item.text}
                    </span>{" "}
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

export default Displaytype;
