import React from "react";

const ReviewCard = ({ reviewer, review }) => {
  return (
    <div className="w-[340px] md:w-[360px] h-[140px] bg-white p-3 flex flex-col justify-between rounded-md border border-[#28558126]/15 shadow-md">
      <div className="flex gap-3">
        <p className="text-[14px] text-[#285581] font-bold">{reviewer}</p>
        <img src="./stars.png" alt="rating" className="object-contain" />
      </div>
      <p className="text-[13px] text-[#285581] font-light">{review}</p>
    </div>
  );
};

export default ReviewCard;
