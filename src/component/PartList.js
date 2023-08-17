import React from "react";
import PartBody from "./PartBody";
import PartEyes from "./PartEyes.js";
import PartHair from "./PartHair";
import PartMouth from "./PartMouth";
import PartEyebrows from "./PartEyebrows";
import PartGlasses from "./PartGlasses";
import PartClothingL1 from "./PartClothingL1";
import PartClothingL2 from "./PartClothingL2";
import PartClothingL3 from "./PartClothingL3";

function PartList({ total, handleImageChange }) {
  return (
    <div>
      <PartBody total={total} handleImageChange={handleImageChange} />
      <PartEyes total={total} handleImageChange={handleImageChange} />
      <PartHair total={total} handleImageChange={handleImageChange} />
      <PartMouth total={total} handleImageChange={handleImageChange} />
      <PartEyebrows total={total} handleImageChange={handleImageChange} />
      <PartGlasses total={total} handleImageChange={handleImageChange} />
      <PartClothingL1 total={total} handleImageChange={handleImageChange} />
      <PartClothingL2 total={total} handleImageChange={handleImageChange} />
      <PartClothingL3 total={total} handleImageChange={handleImageChange} />
    </div>
  );
}

export default PartList;
