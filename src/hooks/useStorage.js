import { useState, useEffect } from "react";
import { storage, db } from "../Configs/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

// custom hook for handling file uplaod and reutning info like upload url
const useStorage = (file) => {
  // state to keep track f upload progress
  const [uploadProgress, setUploadProgress] = useState(0);
  // state to keep track of errors
  const [error, setError] = useState(null);
  // state to store the uplaoded image url0
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // image metadata
    const metadata = {
      contentType: file.type,
    };

    // reference to store the file in the firebase storage
    const storageRef = ref(storage, `images/${file.name}`);

    // firestore db 'images' collection ref
    const collectionRef = collection(db, "images");

    // uploading image to ref
    const uploadImage = uploadBytesResumable(storageRef, file, metadata);

    // putting the file in the reference
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        // finding the upload progress
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        setUploadProgress(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Uploading paused :(");
            break;
          case "running":
            console.log("Uploading paused :)");
            break;
          default:
            break;
        }
      },
      (err) => {
        setError("failed to upload image");
        console.error(err);
      },
      async () => {
        // getting and setting the uploaded image url
        const url = await getDownloadURL(uploadImage.snapshot.ref);
        console.log("url:" + url);
        setImageUrl(url);
        await addDoc(collectionRef, { url: url, createdAt: serverTimestamp() });
      }
    );
  }, [file]);

  return { uploadProgress, imageUrl, error };
};

export default useStorage;
