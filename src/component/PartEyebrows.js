import React, { useState } from "react";

function PartEyebrows({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("eyebrows", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="eyebrows">
        <h2>Eyebrows</h2>
        <div className="list">
          {[...Array(total.eyebrows)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`eyebrows-${index}`}
            >
              <img
                src={`eyebrows/${index + 1}.png`}
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

export default PartEyebrows;
