import React from "react";
import ProductList from "./ProductList";
import "./custom-scrollbar.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ProductCarousel = () => {
  return (
    <div className=" h-auto py-[48px] pl-[16px] sm:pl-[32px] md:pl-[160px] grid gap-[48px]">
      <div className="w-full max-w-[1120px] h-[88px] flex justify-between">
        <div className="w-[149px] h-[88px] font-poppins text-[32px] sm:text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left">
          New Arrivals
        </div>
        <div className="flex border-b-[1px] border-blackButton items-end">
          <button className="flex items-center whitespace-nowrap pb-1 text-sm sm:text-base">
            More Products
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/** الصور */}
      <div
        id="custom-slider"
        className="flex overflow-x-auto no-scrollbar mr-4  whitespace-nowrap "
      >
        <ProductList />
      </div>
    </div>
  );
};

export default ProductCarousel;
