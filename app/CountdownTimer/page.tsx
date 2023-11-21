"use client";
import React from "react";
import BasicTabs from "../Components/BasicTabs";
import Contentbutton from "../Components/Contentbutton";
import TitleSize from "../Components/TitleSize";
import TitleAlignment from "../Components/TitleAlignment";
import Content from "../Components/Content";
import Calender from "../Components/Calender";
import Yourtitle from "../Components/Yourtitle";
import Timezone from "../Components/Timezone";
import Colorinput from "../Components/Colorinput";

const CountdownTimer = () => {
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
        <hr className="  mt-4" />
        <TitleAlignment />
        <hr className="  mt-4" />
        <Yourtitle text="Your Title"/>
        <Content title="Hide Subtitle?" />
        <hr className="  mt-4" />
        <Calender asign="End Data" title="16-10-2023" />
        <Calender asign="End Time" title="10:40 PM" />
        <Content title="Hide When Finish" />
        <hr className="  mt-4" />
        <Timezone />
        <hr className="  mt-4" />
        <Colorinput color="Color"/>
        <hr className="  mt-4" />
        <Content title="Time Show on Product List" />
        <Content title="Apply Margin" />
        <Content title="Disable Interaction" />
      </div>
    </>
  );
};

export default CountdownTimer;
