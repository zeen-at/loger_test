import React from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { towns } from "../constants";

const SearchLocations = () => {
  return (
    <div>
      <div className="mt-12 md:mt-32 h-[436px] md:h-[344px] bg-white border-[#28558126]/15 rounded-lg p-4  ">
        <div className="flex flex-row items-center justify-evenly px-10 py-4">
          <div className=" border-[#28558126]/15 flex-grow border-t"></div>
          <p className="text-[#285581] font-bold text-xl">
            Search Our Locations
          </p>
          <div className="border-[#28558126]/15 flex-grow border-t"></div>
        </div>
        <div className="flex flex-1 gap-4 px-10">
          <CustomInput placeholder="Search locations by postcode" />

          <CustomButton
            handleClick={""}
            buttonColor="bg-[#4680B9]"
            buttonText="Search"
            otherStyles="hidden md:flex justify-center text-white gap-3"
            width="w-1/4"
            icon="./icons/Icon.png"
            isIcon
          />
          <CustomButton
            handleClick={""}
            buttonColor="bg-[#4680B9]"
            otherStyles="md:hidden justify-center text-white"
            width="w-1/4"
            icon="./icons/Icon.png"
            isIcon
          />
        </div>

        <div className="flex justify-evenly items-center px-10 py-4">
          <div className=" border-[#28558126]/15 flex-grow border-t"></div>
          <p className="text-[#285581] font-bold">Or find by town</p>
          <div className="border-[#28558126]/15 flex-grow border-t"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 ">
          {towns.map(({ index, title }) => (
            <div key={index}>
              <CustomButton
                buttonText={title}
                otherStyles="text-[#285581] gap-3 border-[#285581]/15 justify-center"
                width="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchLocations;
