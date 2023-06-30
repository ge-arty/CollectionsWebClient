import React, { useEffect, useRef } from "react";
import dotenv from "dotenv";

dotenv.config();

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.CLOUD_NAME,
        uploadPreset: process.env.UPLOAD_PRESET,
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  const handleUpload = () => {
    widgetRef.current.open();
  };

  return <button onClick={handleUpload}>Upload</button>;
};

export default UploadWidget;
