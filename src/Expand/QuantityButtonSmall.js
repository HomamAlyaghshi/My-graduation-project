import React from "react";

const QuantityButtonSmall = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-[10px] border-[1px] border-blackButton_50 w-[80px] rounded-[4px] px-[8px]">
      <button
        className="w-[30px] h-[30px] flex items-center justify-center"
        onClick={onDecrease}
      >
        -
      </button>
      <div className="font-inter text-[12px] font-semibold leading-[20px] text-center">
        {quantity}
      </div>
      <button
        className="w-[30px] h-[30px] flex items-center justify-center"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtonSmall;
