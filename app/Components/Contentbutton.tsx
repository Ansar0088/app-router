import React, { ReactNode } from "react";
import Menudropdown from "./Menudropdown";
import { motion } from "framer-motion";
import { useState } from "react";

const Contentbutton = (prop:any) => {
 
  return (
    <>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-[12px] mt-2 font-[500px] ">{prop.Link}</p>
        </div>
        <div>
          <Menudropdown name="Product" />
        </div>
      </div>
      <div className="flex justify-end">
        <motion.button
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          className="w-[110px] bg-[#342AEF] rounded-[6px] mt-2 text-white h-[30px] text-[12px]"
        >
          {prop.button}
        </motion.button>
       
      </div>
    </>
  );
};

export default Contentbutton;
