'use client'
import React from "react";
import BasicTabs from "../Components/BasicTabs";
import Contentbutton from "../Components/Contentbutton";
import Yourtitle from "../Components/Yourtitle";
import Content from "../Components/Content";
import TitleSize from "../Components/TitleSize";
import TitleAlignment from "../Components/TitleAlignment";

const page = () => {
  return (
    <>
      <div>
        <BasicTabs />
        <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
          <p className="align-center text-[#888888] text-[12px]">Edit Title</p>
        </div>
        <hr className="  mt-4" />
        <Contentbutton Link="Content type" button="Add Product"/>
        <hr className="  mt-4" />
        <Yourtitle text="Your Title"/>
        <Content title="Hide Title?" />
        <hr className="  mt-4" />
        <TitleSize />
        <TitleAlignment />
        <hr className="  mt-4" />

      </div>
    </>
  );
};

export default page;
