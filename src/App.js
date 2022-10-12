import React, {useState} from "react";

// components
import Nav from "./Components/Nav";
import ImageUploadForm from "./Components/ImageUploadForm";
import ImageGrid from "./Components/ImageGrid";
import ImageModal from "./Components/ImageModal";

const App = () => {
  // state for selected/clicked image
  const [clickedImage, setClickedImage] = useState(null);

  return (
    <div className="App">
      <Nav />
      <ImageUploadForm />
      <ImageGrid setClickedImage={setClickedImage} />
      {clickedImage && <ImageModal clickedImage={clickedImage} setClickedImage={setClickedImage}/>}
    </div>
  );
};

export default App;
