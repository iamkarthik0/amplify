"use client";
import React, { useState } from "react";
import { uploadData, getUrl } from "aws-amplify/storage";
import Image from "next/image";

export default function FileUpload() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      if (file !== null) {
        const result = await uploadData({
          path: ({ identityId }) =>
            `profile-pictures/${identityId}/${file?.name}`,
          data: file,

          options: { contentType: "image/png" },
        }).result;
        const { url } = await getUrl({
          path: result.path,
          options: { validateObjectExistence: true },
        });
        const imageUrl = url.toString();

        setUploadedImageUrl(imageUrl);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <Image src={uploadedImageUrl || "/"} width={500} height={500} alt="sss" />
    </div>
  );
}
