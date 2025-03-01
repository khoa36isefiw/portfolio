"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { experiences } from "@/data/experiences";

function Experiences() {
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      // calculate the height of the container
      const resizeObserver = new ResizeObserver(() => {
        setHeight(ref.current?.clientHeight || 0);
      });
      resizeObserver.observe(ref.current);

      return () => resizeObserver.disconnect();
    }
  }, []);
  // console.log("height: ", height);
  return (
    <Container className="z-1 relative mt-[60px] min-h-[300px] bg-[#3d3e42] py-4">
      <h1 className="absolute left-0 top-0 translate-x-[50%] translate-y-[-50%] text-[46px] font-bold text-white">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <div key={index}>
          <div className="h-10" />
          <div className="flex items-center">
            {/* Year and Triangle */}
            <div className="relative flex h-[40px] items-center justify-center bg-[#5d5e61] px-4">
              {exp.time}
              <div className="absolute -right-[20px] top-0 h-full w-[20px] bg-[#5d5e61] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"></div>
            </div>

            <div className="mx-8 flex flex-col items-center">
              <div className="h-5 w-5 rounded-full bg-primary-color drop-shadow-xl"></div>
            </div>

            <h1 className="text-[28px] font-bold">Front-end Developer</h1>
          </div>
          <div className="flex items-center">
            <div className="invisible relative flex h-[40px] items-center justify-center bg-[#5d5e61] px-4">
              2024
              <div className="absolute -right-[20px] top-0 h-full w-[20px] bg-[#5d5e61] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"></div>
            </div>

            <div className="mx-6 flex flex-col items-center">
              <div
                className={`mx-4 w-1 bg-yellow-500`}
                style={{ height: `${height}px` }}
              />
            </div>
            <div ref={ref} className="m-width-[50%]">
              <h1 className="text-[20px]">{exp.company}</h1>

              <p>{exp.description}</p>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>• {resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Experiences;
