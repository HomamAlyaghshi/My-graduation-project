import React, { useState, useRef } from "react";

const DropPhoto = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
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

  const handleSubmit = () => {
    console.log("Done");
  };

  const handleDelete = () => {
    setImageSrc(null);
  };

  return (
    <div
      data-aos="fade-left"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`h-[500px] w-full border-2 border-dashed rounded-xl flex flex-col m-4 items-center justify-center transition-colors duration-200 ${
        isDragging ? "bg-slate-600" : "bg-slate-300"
      }`}
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt="Dropped"
            className="max-w-full max-h-[250px] mb-5 "
          />
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
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
          <button
            onClick={() => fileInputRef.current.click()}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Upload Photo
          </button>
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
