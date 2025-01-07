import clsx from "clsx";
import React from "react";
type Props = {
  text: string;
  className?: string;
};

function HeadingH1({ text, className }: Props) {
  return <div className={clsx("text-[46px] font-bold", className)}>{text}</div>;
}

export default HeadingH1;
