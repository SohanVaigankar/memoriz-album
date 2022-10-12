import React from "react";
import { motion } from "framer-motion";

const ImageModal = ({ clickedImage, setClickedImage }) => {
  // fn to handle clicks on backdrop
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setClickedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={clickedImage}
        alt={`modal window for pic`}
        initial={{ y: "100vh" }}
        animate={{ y: "0vh" }}
      />
    </motion.div>
  );
};

export default ImageModal;
