import React from "react";

function Dots() {
  return (
    <div className="grid w-[100px] grid-cols-3 gap-20">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="h-5 w-5 rounded-full bg-[#6a5d4a]"></div>
        ))}
    </div>
  );
}

export default Dots;
