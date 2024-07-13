import React from "react";
import { Link } from "react-router-dom";
import { contact, locations, payLess } from "../constants";

const Footer = () => {
  return (
    <div className="bg-white w-full h-614px md:h-[322px] px-10 md:px-32 py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 justify-between">
        <div className="hidden md:flex flex-col gap-16">
          <img
            src="./footerLogo.png"
            alt="logo"
            className="object-contain w-[165px]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-[14px] text-[#285581]">Locations</p>

          {locations.map(({ link, location }, index) => (
            <Link
              to={link}
              key={index}
              className="underline text-[13px] text-[#197FE5]"
            >
              {location}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-[14px] text-[#285581]">About Pay Less</p>
          {payLess.map(({ link, title }, index) => (
            <Link
              to={link}
              key={index}
              className="underline text-[13px] text-[#197FE5]"
            >
              {title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-[14px] text-[#285581]">Contact Us</p>
          {contact.map(({ number, title }, index) => (
            <>
              <p className="text-[#285581]">{title}</p>
              <a
                href={`tel:${number}`}
                key={index}
                className="underline text-[13px] text-[#197FE5]"
              >
                {number}
              </a>
            </>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-[14px] text-[#285581]">Reviews</p>
          <img
            src="./stars.png"
            alt="rating"
            className="object-contain w-[108px]"
          />
          <p className=" text-[#285581]  text-[13px]">
            <span className="font-bold">4.96 </span>rating{" "}
            <span className="font-bold">167 </span> reviews.{" "}
          </p>
          <Link to="/" className="underline underline-offset-1 text-[#197FE5] ">
            See all reviews
          </Link>
        </div>
        <img
          src="./footerCar.png"
          alt="logo"
          className="hidden md:block object-contain w-[165px]"
        />
        <img
          src="./footerLogo.png"
          alt="logo"
          className="md:hidden object-contain w-[165px]"
        />
      </div>
    </div>
  );
};

export default Footer;
