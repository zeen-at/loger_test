import React from "react";

import Heading from "./components/Heading";
import RatingCard from "./components/ReviewCard";
import { reviews } from "./constants";
import { Link } from "react-router-dom";
import StorageCard from "./components/StorageCard";
import StoreWithUs from "./sections/StoreWithUs";
import SearchLocations from "./sections/SearchLocations";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <div className="bg-[#FAF8F5] ">
      <Heading headerTitle="Self Storage Newcastle & the North East" />

      <div className="w-[340px] md:w-[1140px] mx-auto flex flex-col gap-10  relative  bottom-12 md:static md:bottom-0 ">
        {/* Search Location */}

        <SearchLocations />

        <div className=" flex flex-col md:flex-row justify-between ">
          <div className="w-[340px] md:w-[650px]">
            <p className="text-[24px] md:text-[42px] font-light  text-[#285581] leading-relaxed tracking-wide">
              <img
                src="./lookingStroke.png"
                alt="stroke"
                className=" md:block left-28 top-[37px] relative md:bottom-[-72px] md:left-[140px] md:w-[220px] object-contain"
              />
              We’re a <span className="font-bold">family-run</span> North East
              self storage company that’s rated{" "}
              <span className="font-bold"> 5 stars </span>
              by our loyal customers
            </p>
            <p className="py-3 text-[20px] font-thin text-[#285581] tracking-wide w-[339px] md:w-[485px]">
              * Without the High Prices of National Chains
            </p>
          </div>
          <img src="./aboutUs.png" alt="aboutUsImg" className="object-cover" />
        </div>
        <div className=" flex flex-col md:flex-row gap-4 md:justify-between">
          {reviews.map(({ user, review }) => (
            <RatingCard review={review} reviewer={user} />
          ))}
        </div>
        <p className="text-[#285581] text-[16px]">
          <span className="font-bold">4.96 </span>average rating across{" "}
          <span className="font-bold">167 </span> reviews.{" "}
          <Link to="/" className="underline underline-offset-1 text-[#197FE5]">
            See all reviews
          </Link>
        </p>

        <div className="m-auto">
          <p className="text-[40px] font-bold text-[#285581]  ">
            {" "}
            I’m looking for
            <img
              src="./lookingStroke.png"
              alt="stroke"
              className="relative top-[-16px] left-[106px] w-[100px]"
            />
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-auto">
          <StorageCard img="./homeStorage.png" storageType="House storage" />
          <StorageCard
            img="./businessStorage.png"
            storageType="Business storage"
          />
        </div>
      </div>
      <StoreWithUs />
      <div className="review_gradient_background ">
        <div className="mx-auto text-center text-[40px] text-[#285581] ">
          <p>Self storage rated </p>
          <p>
            <span className="font-bold"> 5 stars </span>by our customers
          </p>
        </div>

        <div className="py-10 px-5 md:px-32 flex flex-col md:flex-row gap-4 md:justify-between ">
          {reviews.map(({ user, review }) => (
            <div key={user} className="flex flex-col gap-6">
              <RatingCard review={review} reviewer={user} />
              <RatingCard review={review} reviewer={user} />
              <RatingCard review={review} reviewer={user} />
            </div>
          ))}
        </div>
        <p className="px-10 text-[#285581] text-[18px] mx-auto w-full text-center py-10">
          <span className="font-bold">4.96 </span>average rating across{" "}
          <span className="font-bold">167 </span> reviews.{" "}
          <Link to="/" className="underline underline-offset-1 text-[#197FE5] ">
            See all reviews
          </Link>
        </p>
      </div>
      <Footer />
      <div className="w-full font-thin text-white px-10 py-4 flex flex-col md:flex-row gap-4 md:justify-between bg-[#2A4D6F]">
        <p className=" text-[14px]">
          Pay Less for Storage, 18 Arrow Close, Killingworth, Newcastle Upon
          Tyne, NE12 6QN
        </p>
        <p className=" text-[14px]">Registered Company (0451 5857)</p>
      </div>
    </div>
  );
};

export default Home;
