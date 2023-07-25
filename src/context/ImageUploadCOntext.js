// ImageUploadContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const ImageUploadContext = createContext();

export function useImageUpload() {
  return useContext(ImageUploadContext);
}

export function ImageUploadProvider({ children }) {
  const [image, setImage] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadState, setUploadState] = useState(Number)

  useEffect(() => {
    const handleImageUpload = async (name) => {
      if (image) {
        const id = Math.random() * 1000;
        console.log(image);

        const storageRef = ref(storage, `images/${name}${id}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        setUploading(true);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Show progress if needed
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(`Upload is ${progress}% done`);
            setUploadState(progress)
          },
          (error) => {
            // Handle errors
            console.error('Error uploading image:', error);
            setUploading(false);
          },
          async () => {
            // Upload completed successfully
            console.log('Image uploaded successfully!');
            setUploading(false);

            // Get the download URL
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setDownloadURL(downloadURL);
              console.log('Download URL:', downloadURL);
            } catch (error) {
              console.error('Error getting download URL:', error);
            }
          }
        );
      }
    };

    if (uploading) {
      handleImageUpload(image?.name);
    }
  }, [image, uploading]);

  const clearImageData = () => {
    setImage(null);
    setDownloadURL(null);
    setUploading(false);
    setUploadState(0)
  };

  const value = {
    image,
    setImage,
    downloadURL,
    uploading,
    setUploading,
    uploadState, 
    clearImageData
  };

  return (
    <ImageUploadContext.Provider value={value}>
      {children}
    </ImageUploadContext.Provider>
  );
}
