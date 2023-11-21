import React, { useState } from "react";

const Colorinput = (prop:any) => {
  const [selectedColor, setSelectedColor] = useState("#047FBB");

  const handleChange = (event: { target: { value: any } }) => {
    const hexColor = event.target.value;
    setSelectedColor(hexColor);
  };
  return (
    <>
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-[12px] font-[500] text-[#303030] w-[70px] ">{prop.color}</p>
        </div>
        <div>
          <div className="flex gap-1 bg-[#EEEEEE] w-[121px] rounded-sm">
            <input
              type="color"
              value={selectedColor}
              style={{ width: "25px",borderRadius:"190px" }}
              onChange={handleChange}
            />
            <p className="text-xs flex items-center">{selectedColor}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colorinput;
