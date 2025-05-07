import React, { useState, useEffect, useRef } from "react";
import { FcUpload, FcStackOfPhotos, FcApproval } from "react-icons/fc"; // استيراد الأيقونات المناسبة

const Counter = ({ target, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // لا تبدأ العد إذا لم تكن قد وصلت إلى العنصر

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
  }, [target, startCounting]);

  return (
    <p className="font-poppins text-[28px] font-bold leading-[24px] mt-5">
      {Math.floor(count)} {/* استخدام Math.floor لتقريب الرقم */}
    </p>
  );
};

const Values = () => {
  const [valueItems] = useState([
    {
      icon: <FcUpload className="text-5xl mb-[16px]" />,
      title: "Number of articles",
      number: 251,
    },
    {
      icon: <FcStackOfPhotos className="text-5xl mb-[16px]" />,
      title: "Number of image proccessing",
      number: 2548,
    },
    {
      icon: <FcApproval className="text-5xl mb-[16px]" />,
      title: "Number of subscribers",
      number: 192,
    },
  ]);

  const [startCounting, setStartCounting] = useState(false);
  const valuesRef = useRef(null);

  // استخدام Intersection Observer لمتابعة العنصر
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // يبدأ العد عند ظهور العنصر
          observer.disconnect(); // إيقاف المراقبة بعد أن ظهر العنصر
        }
      },
      { threshold: 0.5 } // يبدأ العد عندما يظهر 50% من العنصر
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => {
      if (valuesRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={valuesRef}
      className="w-full max-w-[1440px] py-[108px] flex justify-between items-center gap-[24px] px-8 "
    >
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="flex-1 max-w-[400px] min-w-[200px] h-auto p-[24px] flex flex-col items-center text-white rounded-3xl text-center shadow-md shadow-neon hover:shadow-white transition-all duration-500 border border-neon"
        >
          <div className="w-full flex justify-center items-center">
            {item.icon} {/* عرض الأيقونة */}
          </div>
          <div className="w-full">
            <p className="font-poppins text-[20px] font-medium leading-[28px]">
              {item.title}
            </p>
            <Counter target={item.number} startCounting={startCounting} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
