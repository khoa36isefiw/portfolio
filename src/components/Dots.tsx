import clsx from "clsx";
import React from "react";

function Dots({
  number = 6,
  className,
}: {
  number?: number;
  className?: string;
}) {
  return (
    <div className={clsx("grid grid-cols-3", className)}>
      {Array(number)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="h-5 w-5 rounded-full bg-[#6a5d4a]"></div>
        ))}
    </div>
  );
}

export default Dots;
