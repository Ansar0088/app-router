"use client";
import { Plus, Upload } from "../Assets/Svgs/page";
import BasicTabs from "../Components/BasicTabs";
import Content from "../Components/Content";
import TitleAlignment from "../Components/TitleAlignment";
import TitleSize from "../Components/TitleSize";
import Yourtitle from "../Components/Yourtitle";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <BasicTabs />
      <div className="bg-[#F3F3F3]  mt-3 text-center rounded-[4px] p-3 h-[40px]">
        <p className="align-center text-[#888888] text-[12px]">Edit Video</p>
      </div>
      <hr className="  mt-2" />
      <Yourtitle text="Your Title"/>
      <Content title="Hide Title?" />
      <hr className="  mt-2" />
      <TitleSize />
      <TitleAlignment />
      <hr className="  mt-2" />
      <p className=" text-[#333333] text-[12px] font-[500] mt-3">Video</p>
      <div className="bg-[#F3F3F3] mt-1 rounded-[4px] p-3 h-[90px] text-center">
        <div className=" flex justify-center mt-3">
          {" "}
          <Upload />
        </div>
        <p className=" text-[#888888] text-[12px] font-[500]">Upload Video</p>
      </div>
      <div>
        <Button className="flex gap-3 w-[227px] bg-transparent mt-2 text-[#342AEF] border border-[#342AEF]">
          <Plus /> Add Thumbnail
        </Button>
      </div>
      <TitleSize />
      <hr className="  mt-2" />
      <Content title="Auto Play" />
      <Content title="Control Bar" />
      <Content title="Mute" />
      <Content title="Restart" />
      <Content title="Loop" />
      <Content title="Margin" />
    </>
  );
};

export default page;
