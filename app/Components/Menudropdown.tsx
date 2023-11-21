import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Menudropdown = (prop: { name: any }) => {
  const { name } = prop;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-[110px] h-[25px] p-1 flex justify-between text-xs text-[#333333] font-[500] items-center bg-[#F3F3F3] outline-none rounded-sm text-left px-2">
          {name}
          <MdOutlineKeyboardArrowDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-0">
          <DropdownMenuItem className="text-xs focus:text-[#342AEF] p-1 ">
            Product
          </DropdownMenuItem>
          <DropdownMenuItem className=" text-xs focus:text-[#342AEF] p-1">
            Collection
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs focus:text-[#342AEF] p-1">
            Web URL
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Menudropdown;
