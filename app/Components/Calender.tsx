import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Calender = (props: any) => {
  const { asign, title } = props;
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-[12px] font-[500] text-[#303030] ">{asign}</p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[110px] h-[25px] p-1 flex justify-between text-xs text-[#333333] font-[500] items-center bg-[#F3F3F3] outline-none rounded-sm text-left px-2">
              {title}
              <MdOutlineKeyboardArrowDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Calender;
