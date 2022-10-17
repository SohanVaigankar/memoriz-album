import { createContext, useReducer } from "react";

// reducer
import { modalReducer } from "../Reducers/modalReducer";

// components
import ImageModal from "../../Components/ImageModal";

export const ModalContext = createContext();

const initialState = {
  payload: { isEnabled: false, imageDetails: {} },
};

export const ModalContextProvider = ({ children }) => {
  //  for selected/clicked image
  const [ isEnabled, imageDetails, dispatch ] = useReducer(
    modalReducer,
    initialState
  );

  return (
    <ModalContext.Provider value={{ isEnabled, imageDetails, dispatch }}>
      {children}
      {isEnabled && <ImageModal />}
    </ModalContext.Provider>
  );
};
