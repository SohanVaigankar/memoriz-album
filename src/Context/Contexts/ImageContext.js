import { createContext } from "react";

const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
