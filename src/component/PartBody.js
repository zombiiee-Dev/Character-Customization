import React, { useState } from "react";

function PartBody({ total, handleImageChange }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleClick = (index) => {
    // body/1.png
    handleImageChange("body", index);
    setSelectedImageIndex(index - 1);
  };
  return (
    <div className="list-section">
      <div key="body">
        <h2>Body</h2>
        <div className="list">
          {[...Array(total.body)].map((_, index) => (
            <div
              className={`square ${
                selectedImageIndex === index ? "selected" : "clickable"
              }`}
              key={`body-${index}`}
            >
              <img
                src={`body/${index + 1}.png`}
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

export default PartBody;
