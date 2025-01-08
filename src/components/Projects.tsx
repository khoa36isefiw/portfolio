import React from "react";
import Dots from "./Dots";
import Container from "./Container";
import HeadingH1 from "./HeadingH1";

import { projectsData } from "@/data/projectsData";
import { useRouter } from "next/navigation";

function Projects() {
  const router = useRouter();
  const handleNavigateToDetail = (projectId: number) => {
    router.push(`/projects/${projectId}`); // Điều hướng tới trang chi tiết
  };

  return (
    <Container className="my-4">
      <Dots className="w-[100px] gap-20" />
      <HeadingH1 text={"Projects"} className="text-center" />
      <div className="mt-5 grid grid-cols-4 gap-10">
        {projectsData.map((project) => (
          <div
            key={project?.projectId}
            className="group relative h-64 w-64 overflow-hidden rounded-lg bg-lime-400"
          >
            {/* Image */}
            <img
              src={project?.projectImage}
              alt={project?.projectName}
              className="h-full w-full rounded-lg object-cover transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:cursor-pointer group-hover:opacity-100">
              {/* View Detail Button */}
              <h1>hâhiahai</h1>
              <button
                onClick={() => handleNavigateToDetail(project?.projectId)}
                className="rounded-md bg-primary-color px-4 py-2 text-white hover:bg-sky-600"
              >
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-end">
        <Dots className="gap-20" />
      </div>
    </Container>
  );
}

export default Projects;
