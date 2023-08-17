import React from "react";

function Avatar({ imageSrcs, imageIndexes, newImage }) {
  return (
    <div className="avatar">
      {Object.keys(imageSrcs).map((type, index) => (
        <img
          key={index}
          src={
            newImage
              ? imageIndexes
              : `${imageSrcs[type].path}/${imageIndexes[type]}.png`
          }
          alt=""
          width="260"
          style={{
            zIndex: imageSrcs[type].zIndex,
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
      ))}
    </div>
  );
}

export default Avatar;
