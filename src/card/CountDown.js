import React, { useState, useEffect } from "react";

const CountDownn = () => {
  // حالة (State) للعناصر الأربعة (الأيام، الساعات، الدقائق، الثواني)
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) return prevSec - 1;
        setMinutes((prevMin) => {
          if (prevMin > 0) return prevMin - 1;
          setHours((prevHour) => {
            if (prevHour > 0) return prevHour - 1;
            setDays((prevDay) => (prevDay > 0 ? prevDay - 1 : 0));
            return 23; // إعادة تعيين الساعات إلى 23 عند انتهاء الساعات
          });
          return 59; // إعادة تعيين الدقائق إلى 59 عند انتهاء الثواني
        });
        return 59; // إعادة تعيين الثواني إلى 59 عند انتهاء الثواني
      });
    }, 1000); // تحديث العداد كل ثانية

    // تنظيف المؤقت عند فك تحميل المكون
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDownn;
