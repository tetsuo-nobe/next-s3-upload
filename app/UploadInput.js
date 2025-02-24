"use client";
import { uploadFile } from "./action";

function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

async function handleUpload(event) {
  try {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      await uploadFile(base64, file.name);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

export default function UploadInput() {
  return <input type="file" onChange={handleUpload} />;
}