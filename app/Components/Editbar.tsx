"use client";
import Content from "./Content";
import IconTabs from "./IconTabs";
import { Menuone} from "../Assets/Svgs/page";
import { Menutwo} from "../Assets/Svgs/page";
import { Menuthree} from "../Assets/Svgs/page";
import TitleSize from "./TitleSize";

const Editbar = () => {
  return (
    <>
      <hr className=" mt-5" />
     <TitleSize/>
      <div className="flex items-center w-[235px]  justify-between mt-1">
        <div>
          <p className="text-[12px] font-medium mt-4 text-[#303030] ">
            Title Position
          </p>
        </div>
        <div className="mt-2">
          <IconTabs
            menuone={<Menuthree />}
            menutwo={<Menuone />}
            menuthree={<Menutwo />}
          />
        </div>
      </div>
      <hr className="  mt-4" />
      <Content title="Content Margin" />
      <Content title="Margin" />
      <Content title="Disable Interaction" />
      
      
    </>
  );
};
export default Editbar;
