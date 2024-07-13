import React from "react";
import CustomButton from "./CustomButton";

const StorageCard = ({ img, storageType }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-10 justify-center items-center  w-[340px] md:w-[450px] h-[240px] md:h-[448px] p-[24px] md:px-[64px] md:py-[40px] bg-white rounded-md shadow-md">
      <img
        src={img}
        alt="storageTypeImg"
        className="object-cover w-[160px] h-[133px] md:w-[288px] md:h-[240px]"
      />
      <CustomButton
        isIcon
        handleClick={""}
        buttonText={storageType}
        width="w-full"
        otherStyles="gap-3 border-none justify-center"
      />
    </div>
  );
};

export default StorageCard;
