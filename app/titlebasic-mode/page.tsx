"use client";
import React from "react";
import BasicTabs from "../Components/BasicTabs";
import Content from "../Components/Content";
import TitleSize from "../Components/TitleSize";
import TitleAlignment from "../Components/TitleAlignment";
import Yourtitle from "../Components/Yourtitle";
import SmTabs from "../Components/SmTabs";
import Displaytype from "../Components/Displaytype";

const page = () => {

  return (
    <>
      <BasicTabs />
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">Edit Title</p>
      </div>
      <hr className="  mt-4" />
      <Yourtitle text="Your Title"/>
      <Content title="Hide Title?"/>
      <hr className="  mt-4" />
      <TitleSize />
      <hr className="  mt-4" />
      <TitleAlignment/>
      <hr className="  mt-4" />
      <SmTabs/>
      <hr className="  mt-4" />
       <Content title="Content Margin"/>
       <Content title="Margin"/>
       <Content title="Hide Content Title"/>
       <Content title="Hide Product Price"/>
       <Content title="Disable Interaction"/>

    </>
  );
};

export default page;
