import React, { useContext } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

// context
import { ModalContext } from "../Context/Contexts/ModalContext";
import { OPEN_IMAGE_MODAL } from "../Context/action.types";

const ImageGrid = () => {
  // context
  const { dispatch } = useContext(ModalContext);

  // getting docs from useFirestore()
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              dispatch({
                type: OPEN_IMAGE_MODAL,
                payload: { isEnabled: true, modalImageDetails: { url: doc.url } },
              });
            }}
            whileHover={{ opacity: 1 }}
            layout
          >
            <motion.img
              src={doc.url}
              alt={doc.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
