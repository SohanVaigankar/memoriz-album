import React from "react";

// components
import Nav from "./Components/Nav";
import ImageUploadForm from "./Components/ImageUploadForm";
import ImageGrid from "./Components/ImageGrid";

// context
import { ModalContextProvider } from "./Context/Contexts/ModalContext";

const App = () => {

  return (
    <div className="App">
      <Nav />
      <ImageUploadForm />
      <ModalContextProvider>
        <ImageGrid/>
      </ModalContextProvider>
    </div>
  );
};

export default App;
