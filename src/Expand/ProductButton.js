import React, { useState } from "react";

const ProductButton = () => {
  // إنشاء state لتخزين قيمة العداد
  const [count, setCount] = useState(0);

  // دالة لزيادة العداد
  const incrementCount = () => {
    setCount(count + 1);
  };

  // دالة لنقص العداد
  const decrementCount = () => {
    // التأكد من أن العداد لا ينقص عن 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-around gap-[10px] bg-background_50  w-[120px] rounded-[8px] px-[8px]">
      <button
        className="w-[20px] h-[20px]  flex items-center justify-center"
        onClick={decrementCount} // عند الضغط ينقص العداد
      >
        -
      </button>
      <div className="w-[8px] h-[26px] flex items-center justify-center  font-inter text-[16px] font-semibold leading-[26px] text-center">
        {count} {/* عرض قيمة العداد */}
      </div>
      <button
        className=" w-[20x] h-[20px]  flex items-center justify-center"
        onClick={incrementCount} // عند الضغط يزيد العداد
      >
        +
      </button>
    </div>
  );
};

export default ProductButton;
