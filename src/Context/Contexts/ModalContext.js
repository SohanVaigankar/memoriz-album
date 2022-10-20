import { createContext, useReducer } from "react";

// reducer
import { modalReducer } from "../Reducers/modalReducer";

// components
import ImageModal from "../../Components/ImageModal";

export const ModalContext = createContext();

const initialState = { isEnabled: false, imageDetails: {} };

export const ModalContextProvider = ({ children }) => {
  //  for selected/clicked image
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  const { isEnabled, modalImageDetails } = modalState;

  return (
    <ModalContext.Provider value={{ isEnabled, modalImageDetails, dispatch }}>
      {children}
      {isEnabled && <ImageModal />}
    </ModalContext.Provider>
  );
};
