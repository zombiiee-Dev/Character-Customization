import React, { useState } from "react";

function PartHair({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("hair", index);
    setSelectedImageIndex(index - 1);
  };

  return (
    <div className="list-section">
      <div key="hair">
        <h2>Hair</h2>
        <div className="list">
          {[...Array(total.hair)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`hair-${index}`}
            >
              <img
                src={`hair/${index + 1}.png`}
                alt=""
                height="60"
                onClick={() => handleClick(index + 1)}
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

export default PartHair;
