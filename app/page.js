"use client";
import  {useState} from "react"
import { uploadFile } from "./action";

const  UploadInput = () => {
  const [image, setImage] = useState("")
  
  
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
        setImage(`https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${process.env.NEXT_PUBLIC_S3_PATH}/${file.name}`)
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    
  return (
    <div>
        <input type="file" onChange={handleUpload} /><br/>
        <input value={image} size={60} onChange={(e)=> setImage(e.target.value)} type="text" name="image" placeholder="画像パス" required/>
    </div>
  )
}

export default UploadInput