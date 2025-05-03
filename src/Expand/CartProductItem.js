import React from "react";
import QuantityButtonSmall from "./QuantityButtonSmall";

const CartProductItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="bg-white h-[144px] border-b-[1px] border-b-blackButton_50 flex items-center gap-[16px] p-2">
      <div className="flex gap-[10px] items-center w-full">
        <img
          alt={item.name}
          src={item.image}
          className="h-full w-[80px] object-contain"
        />
        <div className="flex flex-col justify-between h-full flex-grow">
          <p className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton">
            {item.name}
          </p>
          <p className="font-inter text-[12px] font-normal leading-[20px] text-left text-blackButton_50">
            Color: {item.color}
          </p>
          <QuantityButtonSmall
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </div>
        <div className="flex flex-col items-end h-full justify-between">
          <p className="font-inter text-[14px] font-semibold leading-[22px] text-right">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button className="text-blackButton_50 text-right" onClick={onRemove}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
