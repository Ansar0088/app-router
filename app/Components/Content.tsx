import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
const Content = (prop: { title: any}) => {
  const { title,  } = prop;

  const [state, setState] = useState("account");
  return (
    <>
      <div className="flex items-center pr-2 justify-between   w-[240px]  mt-3">
        <div>
          <p className="text-[12px] w-[90px] mt-2 font-[500]">{title}</p>
        </div>
        <div>
          <Tabs >
            <div className=" h-[30px]  w-[121px]  ">
            <TabsList className="grid grid-cols-2  p-0 h-[33px] bg-[#F3F3F3]  ">
                <TabsTrigger
                  value="insert"
                  className="relative flex items-center justify-center cursor-pointer  "
                  onClick={() => setState("account")}
                >
                  {state == "account" ? (
                    <motion.div
                      className="underline absolute inset-0  bg-white text-black rounded-md"
                      layoutId="bubble"
                    />
                  ) : null}
                  <span
                    className={`text-xs z-10  ${
                      state === "account" ? "text-[#342AEF]" : "text-[#888888]"
                    }`}
                  >
                    No
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="edit"
                  className="relative flex items-center justify-center  cursor-pointer"
                  onClick={() => setState("password")}
                >
                  {state == "password" ? (
                    <motion.div
                      className={`underline absolute inset-0  bg-white    rounded-md   ${
                        state === "password"
                          ? "text-[#342AEF]"
                          : "text-gray-200"
                      }`}
                      layoutId="bubble"
                    />
                  ) : null}
                  <span
                    className={`text-xs z-10  ${
                      state === "password" ? "text-[#0099FF]" : "text-[#888888]"
                    }`}
                  >
                    Yes
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Content;
