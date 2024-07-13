import React from "react";
import CustomButton from "../components/CustomButton";
import { storeReasons } from "../constants";
import { Link } from "react-router-dom";

const StoreWithUs = () => {
  return (
    <section className="bg-white h-full py-10 md:py-16 px-5 md:px-32 mt-10">
      <div className="flex flex-col md:flex-row gap-6 md:justify-between">
        <div>
          <p className="text-[#285581] font-light text-[18px] md:text-[24px]">
            Why store with us?
          </p>
          <p className="text-[#285581] font-bold text-[24px] md:text-[40px]">
            We’re safe, easy & affordable
          </p>
        </div>
        <CustomButton
          handleClick={""}
          buttonColor="bg-[#FFB84D]"
          buttonText="Get a quote"
          isIcon
          otherStyles="h-[48px] w-[149px] gap-1 items-center text-[16px]"
        />
      </div>

      <div className="py-10 flex flex-col md:flex-row justify-between w-full ">
        {storeReasons.map(({ title, img, a, b, c, d }) => (
          <div className="flex flex-col gap-4" key={title}>
            <img
              src={img}
              alt={title}
              className="object-cover w-[360px] h-[237px] "
            />

            <div className="divide-y px-4 ">
              <p className="text-[24px] font-bold text-[#285581] py-2">
                {title}
              </p>

              <div className="flex flex-col gap-3 py-4">
                <div className="flex gap-3">
                  <img src="./icons/checkIcon.png " alt="checkIcon" />
                  <p>{a}</p>
                </div>
                <div className="flex gap-3">
                  <img src="./icons/checkIcon.png " alt="checkIcon" />
                  <p>{b}</p>
                </div>
                <div className="flex gap-3">
                  <img src="./icons/checkIcon.png " alt="checkIcon" />
                  <p>{c}</p>
                </div>
                <div className="flex gap-3">
                  <img src="./icons/checkIcon.png " alt="checkIcon" />
                  <p>{d}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[338px] h-[396px] md:w-[1140px] md:h-[320px] bg-[#FAF8F5] md:my-32 rounded-md">
        <img
          src="./icons/plusIcon.png"
          alt="addIcon"
          className="relative bottom-5 px-10"
        />

        <div className="flex justify-between ">
          <div className="px-5 md:px-10 text-[#285581] flex flex-col gap-4">
            <p className="font-bold text-[18px] md:text-[24px]">
              Plus, we provide a high quality, personal service
            </p>
            <p className="text-[#285581] font-light text-[18px] md:text-[22px]">
              With over 50% of our new customers come from recommendations
            </p>
            <div className=" font-light flex gap-3 items-center">
              <img src="./avatar.png" alt="avatar" />
              <p>Sarah, Customer Lead</p>
            </div>
            <img
              src="./stars.png"
              alt="ratingStars"
              className="object-cover w-[128px]"
            />
            <p>4.96 average rating across 167 reviews</p>
            <Link to="/" className="underline text-[#197FE5] font-light ">
              See all reviews
            </Link>
          </div>
          <img
            src="./reviewsBg.png"
            alt="reviewBg"
            className="hidden md:block object-cover relative bottom-12"
          />
        </div>
      </div>

      <div className="w-full  h-[816px] md:w-[1146px] md:h-[569px] gradient_background my-32 md:rounded-md">
        <div className="flex justify-between ">
          <div className="px-5 md:px-10 text-white flex flex-col gap-4  py-20">
            <p className="font-bold text-[18px] md:text-[24px]">
              Pay Less For Storage was founded in 2001
            </p>
            <p className=" font-light text-[16px] py-4">
              Since then we’ve provided storage for large organisations
              including the NHS and Northumbria Police as well as helping
              hundreds of families store their furniture before moving to new
              homes.
            </p>
            <p className=" font-light text-[16px]">
              Starting in Killingworth we now have storage sites in Brunswick,
              Morpeth, Washington and Newcastle city centre.
            </p>
            <div className=" font-light flex gap-5 items-center py-5">
              <img src="./NHS.png" alt="NHSLogo" />
              <img src="./police.png" alt="police" />
            </div>

            <div className="flex flex-col md:flex-row gap-3 py-5">
              <div className="w-full md:w-[263px] bg-[#FFFFFF]/10 px-5 py-2 border-[#FFFFFF0D] rounded-md">
                <p className="font-bold text-[20px] md:text-[32px]">10,000+</p>
                <p className="text-[#FFFFFF99]">Customers</p>
              </div>
              <div className="w-full md:w-[263px] bg-[#FFFFFF]/10 px-5 py-2 border-[#FFFFFF0D] rounded-md">
                <p className="font-bold text-[20px] md:text-[32px]">18 years</p>
                <p className="text-[#FFFFFF99]">Storage experience</p>
              </div>
              <div className="w-full md:w-[263px] bg-[#FFFFFF]/10 px-5 py-2 border-[#FFFFFF0D] rounded-md">
                <p className="font-bold text-[20px] md:text-[32px]">5 sites</p>
                <p className="text-[#FFFFFF99]">Across the North East</p>
              </div>
            </div>
          </div>
          <img
            src="./map.png"
            alt="reviewBg"
            className="hidden md:block object-contain relative"
          />
        </div>
      </div>
    </section>
  );
};

export default StoreWithUs;
