import React from "react";
import Avatar from "./Avatar";
import Randomize from "./Randomize";
import PartList from "./PartList";

function Body({
  imageSrcs,
  imageIndexes,
  randomizeImages,
  total,
  handleImageChange,
}) {
  return (
    <div className="avatar-group gap-30">
      <div>
        <div className="avatar-wrapper">
          <Avatar
            imageSrcs={imageSrcs}
            imageIndexes={imageIndexes}
            handleImageChange={handleImageChange}
          />
          <Randomize randomizeImages={randomizeImages} />
        </div>
      </div>

      <PartList total={total} handleImageChange={handleImageChange} />
    </div>
  );
}

export default Body;
