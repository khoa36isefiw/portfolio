import clsx from "clsx";
import React from "react";

function Container({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement> | undefined;
}) {
  return (
    <div
      ref={ref}
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
