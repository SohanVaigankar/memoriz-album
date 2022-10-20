import React, { useState, useContext } from "react";
import ProgressBar from "./ProgressBar";

// context
import { ImageContext } from "../Context/Contexts/ImageContext";
import { UPLOAD_IMAGE } from "../Context/action.types";

const ImageUploadForm = () => {
  // context
  const { file, dispatch } = useContext(ImageContext);

  //   state to store error messages
  const [error, setError] = useState(null);

  //   array of allowed file types
  const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

  // fn to handle image upload
  const uploadFileHandler = (e) => {
    e.preventDefault();

    // getting selected files
    let selectedFile = e.target.files[0];
    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      dispatch({ type: UPLOAD_IMAGE, payload: { file: selectedFile } });
      setError("");
    } else {
      dispatch({ type: UPLOAD_IMAGE, payload: {} });
      setError("only png/jpg/jpeg images are supported.");
    }
  };

  return (
    <form className="upload-form">
      <label className="upload-label">
        <input
          type="file"
          onChange={uploadFileHandler}
          className="upload-input"
        />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar />}
      </div>
    </form>
  );
};

export default ImageUploadForm;
