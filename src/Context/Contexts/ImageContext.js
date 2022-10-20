import { createContext, useReducer } from "react";

// reducer
import { imageReducer } from "../Reducers/imageReducer";

export const ImageContext = createContext();

const initialState = {};

export const ImageContextProvider = ({ children }) => {
  const [imageDetails, dispatch] = useReducer(imageReducer, initialState);

  const { file } = imageDetails;
  return (
    <ImageContext.Provider value={{ file, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
