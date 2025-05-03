import React from "react";
import StarsDisplay from "../ProductPageComponents/StarsDisplay";

const ReviewCart = ({ imageSrc, name, reviewText }) => {
  return (
    <div className="w-full   py-4 border-b border-blackButton_50">
      {/* قسم الصورة والاسم والنجوم */}
      <div className="flex items-start gap-[20px] mb-2">
        <img
          alt="profile"
          src={imageSrc}
          className="w-[72px] h-[72px] rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-blackButton font-inter text-[20px] font-semibold leading-[32px] text-left">
            {name}
          </p>
          <StarsDisplay />
        </div>
      </div>
      {/* قسم النص */}
      <p className="text-para font-inter text-[16px] font-normal leading-[26px] text-left mr-[3px] mb-2">
        {reviewText}
      </p>

      {/* قسم الأزرار */}
      <div className="flex gap-[24px] font-inter text-[12px] font-semibold leading-[20px] text-blackButton">
        <button>Like</button>
        <button>Reply</button>
      </div>
    </div>
  );
};

export default ReviewCart;
