import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { navlink } from "../constants";

const Heading = ({ headerTitle }) => {
  return (
    <section className="gradient_background h-[507px] md:h-[720px]  ">
      {/* Navbar */}
      <div className="py-10 px-10 md:px-20 flex justify-between items-center">
        <Link to="/">
          <img src="./Logo.png" alt="logo" />
        </Link>
        <div className="hidden md:flex gap-4 text-white items-center ">
          {navlink.map((item) => (
            <Link to={item.link} key={item.title}>
              {item.title}
            </Link>
          ))}
          <a
            href="tel:01917439158"
            className="border border-white/20 rounded-md p-2"
          >
            {" "}
            Call: 01917439158
          </a>
          <CustomButton
            icon="./icons/arrowFr.png"
            buttonColor="bg-white"
            buttonText="Get a quote"
            otherStyles="justify-between items-center"
            isIcon
          />
        </div>
        <button className="md:hidden">
          <img src="./icons/menuIcon.png" alt="menuIcon" />
        </button>
      </div>

      {/* Header body */}

      <img
        src="./city.png"
        alt="city img"
        className="object-cover w-full h-full pt-60 "
      />

      <div className="flex flex-col gap-10 px-10 md:px-20  absolute bottom-72 md:bottom-1/3">
        <div className={`font-bold text-3xl md:text-6xl text-white w-1/2 `}>
          {headerTitle}
        </div>
        <CustomButton
          buttonColor="bg-[#FFE0B2]"
          buttonText="Get a quote"
          otherStyles="justify-between"
          isIcon
        />
      </div>
    </section>
  );
};

export default Heading;
