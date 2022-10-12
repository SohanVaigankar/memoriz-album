import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ImageUploadForm = () => {
  // state to store the selected file
  const [file, setFile] = useState(null);

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
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
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
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default ImageUploadForm;
