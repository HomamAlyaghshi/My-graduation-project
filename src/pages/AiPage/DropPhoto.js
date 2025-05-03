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

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #aaa",
        padding: "250px",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor: isDragging ? "#f0f0f0" : "#fff",
        transition: "background-color 0.2s ease",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Dropped"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      ) : (
        <div className="font-Rajdhani font-bold">
          <p>Drop your photo here</p>
          <p>Or</p>
          <button
            onClick={() => fileInputRef.current.click()}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#4F46E5",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Upload Photo
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default DropPhoto;
