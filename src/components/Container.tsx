import clsx from "clsx";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        `px-[20px] text-white shadow-inner md:px-[50px] lg:px-[80px] xl:px-[140px]`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
