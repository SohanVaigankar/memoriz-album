import React, { useContext } from "react";
import { motion } from "framer-motion";

// context
import { ModalContext } from "../Context/Contexts/ModalContext";
import { CLOSE_IMAGE_MODAL } from "../Context/action.types";

const ImageModal = () => {
  // context
  const { imageDetails, dispatch } = useContext(ModalContext);

  // fn to handle clicks on backdrop
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      dispatch({
        type: CLOSE_IMAGE_MODAL,
        payload: { isEnabled: false, imageDetails: {} },
      });
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
        src={imageDetails.url}
        alt={`modal window for pic`}
        initial={{ y: "100vh" }}
        animate={{ y: "0vh" }}
      />
    </motion.div>
  );
};

export default ImageModal;
