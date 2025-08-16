import React, { useState, useRef } from "react";

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
        headers:{
          'Authorization':localStorage.getItem("token"),
          'Accept':'application/json'
        }
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Upload Successful!");
        setAnalysisData(data.data); // ⬅️ هنا نعرض القيم الثلاثة
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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Upload .FITS File</h1>

      <input
        type="file"
        accept=".fits"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="mb-4"
      />

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-neon text-black rounded font-bold"
          disabled={isSubmitting || !imageSrc}
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded font-bold"
        >
          Delete
        </button>
      </div>

      {submitMessage && <p className="mb-4 font-semibold">{submitMessage}</p>}

      {analysisData && (
        <div className="bg-gray-800 text-white p-4 rounded">
          <p>Teff: {analysisData.Teff}</p>
          <p>logg: {analysisData.logg}</p>
          <p>FeH: {analysisData.FeH}</p>
        </div>
      )}
    </div>
  );
};

export default DropPhoto;
