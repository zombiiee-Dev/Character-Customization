import React, { useState } from "react";

function PartClothingL1({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("clothing2", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="clothing2">
        <h2>Clothes</h2>
        <div className="list">
          {[...Array(total.clothing2)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`clothing2-${index}`}
            >
              <img
                src={`clothes/layer_2/${index + 1}.png`}
                alt=""
                onClick={() => handleClick(index + 1)}
                height="60"
                className="img-center"
                style={{ top: "50%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartClothingL1;
