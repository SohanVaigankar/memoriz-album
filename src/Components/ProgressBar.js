import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import useStorage from "../hooks/useStorage";

// context
import { ImageContext } from "../Context/Contexts/ImageContext";
import { UPLOAD_IMAGE } from "../Context/action.types";

const ProgressBar = () => {
  // context
  const { file, dispatch } = useContext(ImageContext);

  const { imageUrl, uploadProgress } = useStorage(file);
  console.log(uploadProgress);

  //   clearing off progress bar when url is ready
  useEffect(() => {
    dispatch({ type: UPLOAD_IMAGE, payload: {} });
  }, [imageUrl, file, dispatch]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: uploadProgress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
