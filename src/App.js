import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";

function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouths: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };
  const imageSrcs = {
    body: { path: "body", zIndex: 0 },
    eyes: { path: "eyes", zIndex: 1 },
    hair: { path: "hair", zIndex: 6 },
    facial_hair: { path: "facial_hair", zIndex: 6 },
    mouths: { path: "mouths", zIndex: 4 },
    eyebrows: { path: "eyebrows", zIndex: 4 },
    earrings: { path: "accessories/earrings", zIndex: 5 },
    glasses: { path: "accessories/glasses", zIndex: 5 },
    hats: { path: "accessories/hats", zIndex: 5 },
    neckwear: { path: "accessories/neckwear", zIndex: 5 },
    clothing1: { path: "clothes/layer_1", zIndex: 2 },
    clothing2: { path: "clothes/layer_2", zIndex: 3 },
    clothing3: { path: "clothes/layer_3", zIndex: 4 },
  };
  const [imageIndexes, setImageIndexes] = useState(total);

  const randomizeImages = () => {
    const newImageIndexes = {
      body: getRandomIndex(total.body),
      eyes: getRandomIndex(total.eyes),
      hair: getRandomIndex(total.hair),
      facial_hair: getRandomIndex(total.facial_hair),
      clothing1: getRandomIndex(total.clothing1),
      clothing2: getRandomIndex(total.clothing2),
      clothing3: getRandomIndex(total.clothing3),
      mouths: getRandomIndex(total.mouths),
      noses: getRandomIndex(total.noses),
      eyebrows: getRandomIndex(total.eyebrows),
      glasses: getRandomIndex(total.glasses),
      neckwear: getRandomIndex(total.neckwear),
      hats: getRandomIndex(total.hats),
    };

    setImageIndexes(newImageIndexes);
  };

  const handleImageChange = (partName, newImageIndex) => {
    // console.log("new", "/body/1.png");
    setImageIndexes((preImage) => ({
      ...preImage,
      [partName]: newImageIndex,
    }));
  };

  const getRandomIndex = (x) => {
    return Math.floor(Math.random() * x) + 1;
  };

  return (
    <div className="App">
      <Header title="CHARACTER" subcrise="🛠️CUSTOMIZATION🛠️" />
      <Body
        imageSrcs={imageSrcs}
        imageIndexes={imageIndexes}
        randomizeImages={randomizeImages}
        total={total}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default App;
