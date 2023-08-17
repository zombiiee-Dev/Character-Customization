import React, { useState } from "react";

function PartEyes({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    handleImageChange("eyes", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="body">
        <h2>Eyes</h2>
        <div className="list">
          {[...Array(total.eyes)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`eyes-${index}`}
            >
              <img
                src={`eyes/${index + 1}.png`}
                alt=""
                height="150"
                onClick={() => handleClick(index + 1)}
                className="img-center"
                style={{ top: "35px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartEyes;
