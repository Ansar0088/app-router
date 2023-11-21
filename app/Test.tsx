"use client";
import { useState } from "react";
import Contentbutton from "./Components/Contentbutton";
import Content from "./Components/Content";
import BasicTabs from "./Components/BasicTabs";
import Yourtitle from "./Components/Yourtitle";

function Test() {

  return (
    <>
      <div>
        <BasicTabs />
      </div>
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">
          Edit Slideshow
        </p>
      </div>
      <hr className="w-[230px]  mt-2" />
      <Contentbutton Link="Content type" button="Add Product"/>
      <hr className="w-[230px]  mt-2" />
      <Yourtitle text="Your Title"/>
      <Content title="Hide Title?" />
    </>
  );
}

export default Test;
