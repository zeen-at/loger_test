import React from "react";

const CustomInput = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="rounded-md bg-[#285581]/15 w-full px-4 py-3 text-sm md:text-base"
    />
  );
};

export default CustomInput;
