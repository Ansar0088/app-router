import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Timezone = (props: any) => {
  const { asign, title } = props;
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-[12px] font-[500] text-[#303030] ">Time zone</p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[130px] h-[30px] p-1 flex justify-between text-xs text-[#888888] font-[500] items-center bg-[#F3F3F3] outline-none rounded-sm text-left px-2">
             Select time zone
              <MdOutlineKeyboardArrowDown />
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Timezone;
