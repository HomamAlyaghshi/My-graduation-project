import React, { useState, useRef } from "react";
import { FaRocket } from "react-icons/fa";
import Button2 from "../../Components/Button2";

const DropPhoto = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [launching, setLaunching] = useState(false); // حالة الانطلاق
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleSubmitWithLaunch = () => {
    if (launching) return; // منع الضغط المتكرر
    setLaunching(true);

    setTimeout(() => {
      setLaunching(false);
      handleSubmit();
    }, 2000); // مدة تأثير الصاروخ (2 ثانية)
  };

  const handleSubmit = () => {
    setLaunching(true); // بدء الحركة
    setTimeout(() => {
      console.log("Done");
      setLaunching(false); // إعادة الوضع الطبيعي بعد انتهاء الحركة
    }, 1000); // مدة الطيران (1 ثانية مثلًا)
  };

  const handleDelete = () => {
    setImageSrc(null);
  };

  return (
    <div
      data-aos="fade-right"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`h-[500px] w-full border-2 border-dashed rounded-xl flex flex-col m-4 items-center justify-center transition-colors duration-200 ${
        isDragging ? "bg-slate-600" : "bg-slate-300"
      } relative`} // relative مهم للعنصر المتحرك
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt="Dropped"
            className="max-w-full max-h-[250px] mb-5 "
          />
          <div className="flex gap-4 relative">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition relative overflow-hidden"
            >
              <FaRocket
                className={`transition-transform duration-700 ease-out ${
                  launching
                    ? "-translate-y-16 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
                size={20}
              />
              Submit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="text-center font-bold font-Rajdhani">
          <p>Drop your photo here</p>
          <p className="my-2">Or</p>
          <Button2 onClick={() => fileInputRef.current.click()}>
            Upload Photo
          </Button2>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default DropPhoto;
