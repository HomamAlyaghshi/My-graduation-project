import React, { useState } from "react";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline"; // القلب الفارغ
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid"; // القلب الممتلئ

const WishlistButton = () => {
  // إنشاء state لتتبع حالة القلب (فارغ أو ممتلئ)
  const [isFavorited, setIsFavorited] = useState(false);

  // دالة لتبديل حالة القلب عند الضغط
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button
      onClick={toggleFavorite} // عند الضغط يتم استدعاء الدالة لتبديل الحالة
      className="flex justify-center items-center w-[310px] font-inter h-[52px] px-[40px] py-[10px] gap-[10px] rounded-[8px] bg-white border border-blackButton text-blackButton hover:bg-1212 hover:text-white transition-all duration-300 transform hover:scale-95  "
    >
      {/* عرض القلب بناءً على حالة isFavorited */}
      {isFavorited ? (
        <SolidHeartIcon className="w-[24px] h-[24px] text-red-500" /> // قلب ممتلئ
      ) : (
        <OutlineHeartIcon className="w-[24px] h-[24px] text-blackButton" /> // قلب فارغ
      )}
      Wishlist
    </button>
  );
};

export default WishlistButton;
