import React, { useState } from "react";

function PartMouth({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("mouths", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="mouths">
        <h2>Mouths</h2>
        <div className="list">
          {[...Array(total.mouths)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`mouths-${index}`}
            >
              <img
                src={`mouths/${index + 1}.png`}
                alt=""
                onClick={() => handleClick(index + 1)}
                height="120"
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

export default PartMouth;
