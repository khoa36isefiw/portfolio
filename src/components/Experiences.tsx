import React from "react";
import Container from "./Container";

function Experiences() {
  return (
    <Container className="relative mt-[60px] h-screen bg-[#3d3e42]">
      <h1 className="absolute left-0 top-0 translate-x-[50%] translate-y-[-50%] text-[46px] font-bold text-white">
        Experience
      </h1>
      <div className="h-10" />

      <div className="flex w-fit">
        <div className="relative flex h-[30px] items-center justify-center bg-[#5d5e61] px-4">
          2024
          <div className="absolute -right-[20px] top-0 h-full w-[20px] bg-[#5d5e61] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"></div>
        </div>
      </div>
      <div className="h-5 w-5 rounded-full bg-primary-color drop-shadow-xl"></div>
    </Container>
  );
}

export default Experiences;

{
  /* <div className="rounded-lg before:absolute before:border-b-[10px] before:border-l-[20px] before:border-t-[10px] before:border-b-transparent before:border-l-blue-300 before:border-t-transparent"></div>; */
}
