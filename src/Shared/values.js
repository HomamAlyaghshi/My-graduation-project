import React, { useState, useEffect } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 4000; // مدة العداد (4 ثواني)
    const step = target / (duration / 10); // حساب الزيادة في كل مرة (كل 10 ميللي ثانية)

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval); // إيقاف العد بعد الوصول إلى الهدف
          return target;
        }
        return prevCount + step;
      });
    }, 10); // كل 10 ميللي ثانية

    return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء المكون
  }, [target]);

  return (
    <p className="font-poppins text-[28px] font-bold leading-[24px] mt-5  ">
      {Math.floor(count)} {/* استخدام Math.floor لتقريب الرقم */}
    </p>
  );
};

const Values = () => {
  const [valueItems] = useState([
    {
      image: "/images/v1.svg",
      title: "Number of articles",
      number: 251,
    },
    {
      image: "/images/v2.png",
      title: "Number of users",
      number: 2548,
    },
    {
      image: "/images/v3.svg",
      title: "Number of subscribers",
      number: 192,
    },
  ]);

  return (
    <div className="w-full max-w-[1440px] py-[72px] flex justify-between items-center gap-[24px] px-8 ">
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="flex-1 max-w-[400px] min-w-[200px] h-auto p-[24px] flex flex-col items-center text-white  rounded-3xl text-center shadow-md shadow-neon hover:shadow-white transition-all duration-500"
        >
          <img
            alt={item.title}
            src={item.image}
            className="w-[40px] h-[36px] mb-[16px]"
          />
          <div className="w-full">
            <p className="font-poppins text-[20px] font-medium leading-[28px]">
              {item.title}
            </p>
            <Counter target={item.number} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
