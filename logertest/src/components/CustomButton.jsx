import React from "react";

const CustomButton = ({
  handleClick,
  buttonColor,
  buttonText,
  icon,
  otherStyles,
  width,
  isIcon,
}) => {
  return (
    <div
      className={`${buttonColor} flex  ${
        width ? width : "w-[150px]"
      }  items-center text-[#28558126]/100 rounded-md px-4 py-3 ${otherStyles} font-semibold border`}
    >
      <button onClick={handleClick}>{buttonText}</button>

      {isIcon && (
        <img
          src={icon ? icon : "./icons/arrowFr.png"}
          alt="icon"
          className="w-5 h-5 object-contain"
        />
      )}
    </div>
  );
};

export default CustomButton;
