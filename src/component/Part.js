import React from "react";

function Part({ total, title, name, path, height, handleImageChange }) {
  const handleClick = (index) => {
    handleImageChange(name, index);
  };

  return (
    <div className="list-section">
      <div key={name}>
        <h2>{title}</h2>
        <div className="list">
          {[...Array(total[name])].map((_, index) => (
            <div className="clickable square" key={`${name}-${index}`}>
              <img
                src={`${path}/${index + 1}.png`}
                alt=""
                height={height}
                onClick={() => handleClick(index)}
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

export default Part;
