"use client"
import React from "react";
import BasicTabs from "../Components/BasicTabs";
import Yourtitle from "../Components/Yourtitle";
import TitleSize from "../Components/TitleSize";
import Colorinput from "../Components/Colorinput";
import Content from "../Components/Content";
import SmTabs from "../Components/SmTabs";

const page = () => {
  return (
    <>
      <BasicTabs />
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">Edit Marquee</p>
      </div>
      <hr className="  mt-2" />
      <Yourtitle text="Text" />
      <TitleSize />
      <hr className="  mt-2" />
      <Colorinput color="Text Color" />
      <Colorinput color="Background Color" />
      <hr className="  mt-2" />
       <Content title="Content Margin"/>
       <Content title="Margin"/>
       <Content title="Disable Interaction"/>
       <SmTabs/>

    </>
  );
};

export default page;
