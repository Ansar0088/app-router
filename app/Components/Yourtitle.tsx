import React from "react";


const Yourtitle=(props:any)=>{
    return(
       <>
       <div className="flex items-center  w-[231px] justify-between   mt-5">
        <div>
          <p className="text-[12px]  text-[#303030] font-[500]">{props.text}</p>
        </div>
        <div>
          <div className="bg-[#F3F3F3] w-[156px] h-[30px] rounded-[6px] flex items-center pl-2 ">
            <input
              className="text-[12px] bg-[#F3F3F3] text-[#888888] font-[54px] w-[145px] outline-none"
              placeholder="Title here"
            />
          </div>
        </div>
      </div>
       </>
    )
};

export default Yourtitle;