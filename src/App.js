import React from "react";

// components
import Nav from "./Components/Nav";
import ImageUploadForm from "./Components/ImageUploadForm";
import ImageGrid from "./Components/ImageGrid";

// context
import { ModalContextProvider } from "./Context/Contexts/ModalContext";
import { ImageContextProvider } from "./Context/Contexts/ImageContext";

const App = () => {
  return (
    <div className="App">
      <ImageContextProvider>
        <Nav />
        <ImageUploadForm />
        <ModalContextProvider>
          <ImageGrid />
        </ModalContextProvider>
      </ImageContextProvider>
    </div>
  );
};

export default App;
