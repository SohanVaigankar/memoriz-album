import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { imageUrl, uploadProgress } = useStorage(file);
  console.log(uploadProgress);

  //   clearing off progress bar when url is ready
  useEffect(() => {
    setFile(null);
  }, [imageUrl, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: uploadProgress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
