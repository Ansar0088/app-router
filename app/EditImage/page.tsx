"use client";
import React from "react";
import BasicTabs from "../Components/BasicTabs";
import Contentbutton from "../Components/Contentbutton";
import Content from "../Components/Content";
import Yourtitle from "../Components/Yourtitle";
import TitleSize from "../Components/TitleSize";
import TitleAlignment from "../Components/TitleAlignment";
import Displaytype from "../Components/Displaytype";
import { Upload } from "../Assets/Svgs/page";

const page = () => {
  return (
    <>
      <BasicTabs />
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">Edit Image</p>
      </div>
      <hr className="  mt-4" />
      <p className=" text-[#333333] text-[12px] font-[500] mt-3">
        Promotional Image
      </p>
      <div className="bg-[#F3F3F3] mt-1 rounded-[4px] p-3 h-[90px] text-center">
        <div className=" flex justify-center mt-3">
          {" "}
          <Upload />
        </div>
        <p className=" text-[#888888] text-[12px] font-[500]">Upload Image</p>
      </div>
      <Contentbutton Link="Link To" button="Link Product" />
      <hr className="  mt-4" />
      <Content title="Hide Title?" />
      <Yourtitle text="Your Title"/>
      <hr className="  mt-4" />
      <TitleSize />
      <TitleAlignment />
      <hr className="  mt-4" />
      <Displaytype />
      <hr className="  mt-4" />
      <Content title="Content Margin" />
      <Content title="Margin" />
      <Content title="Disable Interaction" />
    </>
  );
};

export default page;
