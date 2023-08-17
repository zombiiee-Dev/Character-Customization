import React, { useState } from "react";

function PartClothingL1({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("clothing3", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="clothing3">
        <h2>Clothing (L3)</h2>
        <div className="list">
          {[...Array(total.clothing3)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`clothing3-${index}`}
            >
              <img
                src={`clothes/layer_3/${index + 1}.png`}
                alt=""
                onClick={() => handleClick(index + 1)}
                height="120"
                class="img-center"
                style={{ top: -15 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartClothingL1;
