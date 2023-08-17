import React, { useState } from "react";

function PartGlasses({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("glasses", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="glasses">
        <h2>glasses</h2>
        <div className="list">
          {[...Array(total.glasses)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`glasses-${index}`}
            >
              <img
                src={`accessories/glasses/${index + 1}.png`}
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

export default PartGlasses;
