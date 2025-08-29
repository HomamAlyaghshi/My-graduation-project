import React, { useState, useRef } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline"; 

const DropPhoto = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(file);
      setSubmitMessage("");
      setAnalysisData(null);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    if (!fileInputRef.current || !fileInputRef.current.files[0]) {
      alert("Please select a .fits file first!");
      return;
    }

    const file = fileInputRef.current.files[0];
    if (!file.name.endsWith(".fits")) {
      alert("Only .fits files are allowed!");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Uploading...");
    setAnalysisData(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://192.168.88.187:8000/api/files/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Upload Successful!");
        setAnalysisData(data.data);
      } else {
        setSubmitMessage("Upload Failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setSubmitMessage("Error uploading file");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = () => {
    setImageSrc(null);
    setSubmitMessage("");
    setAnalysisData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Upload .FITS File
      </h1>

      {/* Dropzone*/}
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-96 h-96 border-2 border-dashed border-gray-500 rounded-xl cursor-pointer bg-gray-900 hover:border-neon transition-colors"
      >
        <CloudArrowUpIcon className="w-16 h-16 text-gray-400 mb-2" />
        <p className="text-gray-300 text-lg">Drag & Drop your .fits file here</p>
        <p className="text-sm text-gray-500">or click to select</p>
        <input
          id="file-upload"
          type="file"
          accept=".fits"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* أزرار */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSubmit}
          className="flex-1 px-4 py-2 bg-neon text-black rounded font-bold"
          disabled={isSubmitting || !imageSrc}
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded font-bold"
        >
          Delete
        </button>
      </div>

      {/* رسالة الرفع */}
      {submitMessage && (
        <p className="mt-4 font-semibold text-center text-white">
          {submitMessage}
        </p>
      )}

      {/* بيانات التحليل */}
      {analysisData && (
        <div className="mt-4 bg-gray-800 text-white p-4 rounded">
          <p>Effective temperature (Teff) : {analysisData.Teff}</p>
          <p>Surface gravity (log(g)): {analysisData.logg}</p>
          <p>Metallicity (Fe/H): {analysisData.FeH}</p>
        </div>
      )}
    </div>
  );
};

export default DropPhoto;
