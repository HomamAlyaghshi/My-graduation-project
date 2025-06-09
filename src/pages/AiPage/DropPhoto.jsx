import React, { useState, useRef } from "react";
// Removed FaRocket import as it's no longer needed
// import Button2 from "../../Components/Button2"; // Assuming Button2 is themed correctly

const DropPhoto = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for overall submission process
  const [submitMessage, setSubmitMessage] = useState(""); // For messages like "Done!" or "Uploading..."
  const fileInputRef = useRef(null);

  // === Drag and Drop Handlers ===
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

  // === File Handling ===
  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => { // Use onloadend for more reliable loading
        setImageSrc(reader.result);
        setSubmitMessage(""); // Clear any previous messages
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert("Please drop an image file (e.g., .jpg, .png, .gif)."); // Simple feedback for non-image files
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  // === Submission Logic (without rocket animation) ===
  const handleSubmit = () => {
    if (isSubmitting || !imageSrc) return; // Prevent multiple clicks or submission without image

    setIsSubmitting(true);
    setSubmitMessage("Processing..."); // Indicate that something is happening

    // Simulate network request or processing
    setTimeout(() => {
      console.log("Image processed and submitted!");
      setSubmitMessage("Done!"); // Final success message

      // In a real application, you'd send `imageSrc` to your backend here
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: JSON.stringify({ image: imageSrc }),
      //   headers: { 'Content-Type': 'application/json' },
      // })
      // .then(response => response.json())
      // .then(data => {
      //   setSubmitMessage("Success!");
      //   console.log("Upload successful:", data);
      // })
      // .catch(error => {
      //   setSubmitMessage("Failed!");
      //   console.error("Upload error:", error);
      // })
      // .finally(() => {
      //   setTimeout(() => {
      //     setIsSubmitting(false);
      //     setSubmitMessage("");
      //     // Optional: Clear image after successful submission
      //     // setImageSrc(null);
      //   }, 1500); // Keep "Done!" message for a bit
      // });

      // After a short delay, reset submission state and clear message
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage("");
        // Optionally clear the image after successful submission
        // setImageSrc(null);
      }, 1500); // How long "Done!" message stays
    }, 1000); // Shorter duration as there's no complex animation
  };

  // === Delete Image ===
  const handleDelete = () => {
    setImageSrc(null);
    setSubmitMessage(""); // Clear any messages when deleting
    if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the input so same file can be selected again
    }
  };

  return (
    <div
      data-aos="fade-right"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`h-[500px] w-full border-2 border-dashed rounded-xl flex flex-col m-4 items-center justify-center transition-colors duration-200
                  ${isDragging ? "bg-spaceMid border-neon" : "bg-spaceDark border-subText"} relative p-4`}
    >
      {imageSrc ? (
        // === Image Displayed ===
        <>
          <img
            src={imageSrc}
            alt="Uploaded photo preview"
            className="max-w-full h-[250px] object-contain mb-5 rounded-md shadow-lg shadow-neon/20"
          />
          <div className="flex flex-col sm:flex-row gap-4 relative">
            {/* Submit Button (without rocket icon or animation) */}
            <button
              onClick={handleSubmit}
              className={`flex items-center justify-center gap-2 px-6 py-3 bg-neon text-spaceDark rounded-xl font-bold text-lg
                          hover:bg-opacity-80 hover:scale-[0.98] duration-300 transition-all
                          focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-spaceDark
                          shadow-lg hover:shadow-neon/60
                          ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit"}
            </button>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="px-6 py-3 bg-red-700 text-lightText rounded-xl font-bold text-lg
                         hover:bg-red-800 hover:scale-[0.98] transition duration-300
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-spaceDark"
              disabled={isSubmitting}
            >
              Delete
            </button>
          </div>
          {/* Submission Status Message */}
          {submitMessage && (
            <p className="mt-4 text-star text-lg font-bold transition-opacity duration-300">
              {submitMessage}
            </p>
          )}
        </>
      ) : (
        // === No Image Displayed ===
        <div className="text-center font-bold font-Rajdhani text-lightText">
          <p className="text-xl sm:text-2xl">Drop your photo here</p>
          <p className="my-3 text-subText">Or</p>
          {/* Button for file input */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="px-6 py-3 bg-neon text-spaceDark rounded-xl font-bold text-lg
                       hover:bg-opacity-80 hover:scale-[0.98] duration-300 transition-all
                       focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-spaceDark
                       shadow-lg hover:shadow-neon/60"
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