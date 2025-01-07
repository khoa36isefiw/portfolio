import React from "react";
import Container from "./Container";
import HeadingH1 from "./HeadingH1";

function Experiences() {
  return (
    <Container className="z-1 relative mt-[60px] h-screen bg-[#3d3e42]">
      <h1 className="absolute left-0 top-0 translate-x-[50%] translate-y-[-50%] text-[46px] font-bold text-white">
        Experience
      </h1>
      <div className="h-10" />
      <div className="grid grid-cols-12 items-center">
        {/* Year and Triangle */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="relative flex h-[40px] items-center justify-center bg-[#5d5e61] px-4">
            2024
            <div className="absolute -right-[20px] top-0 h-full w-[20px] bg-[#5d5e61] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"></div>
          </div>
        </div>

        {/* Circle */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-primary-color drop-shadow-xl"></div>
        </div>

        {/* Placeholder for additional content */}
        <div className="col-span-10 flex flex-col">
          {/* position */}
          <HeadingH1 text={"Front-end Developer"} className="text-[28px]" />
          {/* company */}
          <h1 className="text-[20px]">Level Up Studio</h1>
          {/* description */}
        </div>
      </div>

      {/* Line below the Circle */}
      <div className="grid grid-cols-12">
        <div className="col-span-1 col-start-2 flex justify-center">
          <div className="h-10 w-1 bg-white"></div>
        </div>
      </div>
    </Container>
  );
}

export default Experiences;

// function Experiences() {
//   return (
//     <Container className="z-1 relative mt-[60px] h-screen bg-[#3d3e42]">
//       <h1 className="absolute left-0 top-0 translate-x-[50%] translate-y-[-50%] text-[46px] font-bold text-white">
//         Experience
//       </h1>
//       <div className="h-10" />

//       <div>
//         <div className="flex h-fit items-center">
//           <div className="flex w-fit">
//             <div className="relative flex h-[40px] items-center justify-center bg-[#5d5e61] px-4">
//               2024
//               <div className="absolute -right-[20px] top-0 h-full w-[20px] bg-[#5d5e61] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"></div>
//             </div>
//           </div>
//           {/* <div className="ml-8 flex flex-col items-center"> */}
//           <div className="ml-8 h-5 w-5 rounded-full bg-primary-color drop-shadow-xl"></div>
//           {/* <div className="h-10 w-1 bg-white"></div> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Experiences;

{
  /* <div className="rounded-lg before:absolute before:border-b-[10px] before:border-l-[20px] before:border-t-[10px] before:border-b-transparent before:border-l-blue-300 before:border-t-transparent"></div>; */
}
