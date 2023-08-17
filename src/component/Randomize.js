import React from "react";

function Randomize({ randomizeImages }) {
  return (
    <div className="text-center">
      <button className="button" onClick={randomizeImages}>
        Randomize!
      </button>
    </div>
  );
}

export default Randomize;
