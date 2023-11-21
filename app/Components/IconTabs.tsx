"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

export default function IconTabs(Ansar: {
  menuone:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  menutwo:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
  menuthree:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}) {
  const [state, setState] = useState("");
  return (
    <>
      <Tabs className="flex-1">
        <div className=" h-[30px]  w-[121px] p-1.5  ml-5">
          <TabsList className="grid grid-cols-3 p-0 h-[30px] bg-[#F3F3F3]">
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
              <span className="text-xs z-10">{Ansar.menuone}</span>
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
              <span
                className={`text-xs z-10  ${
                  state === "password" ? "text-[#0099FF]" : "text-[#888888]"
                }`}
              >
                {Ansar.menutwo}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="edit"
              className="relative flex items-center justify-center  cursor-pointer"
              onClick={() => setState("time")}
            >
              {state == "time" ? (
                <motion.div
                  className="underline absolute inset-0  bg-white  text-black rounded-md"
                  layoutId="bubble"
                ></motion.div>
              ) : null}
              <span className="text-xs z-10">{Ansar.menuthree}</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </>
  );
}
