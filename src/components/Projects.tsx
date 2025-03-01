import React from "react";
import Dots from "./Dots";
import Container from "./Container";
import HeadingH1 from "./HeadingH1";

import { projectsData } from "@/data/projectsData";

import Image from "next/image";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

function Projects({ ref }: { ref: React.Ref<HTMLDivElement> }) {
  const router = useRouter();

  const handleNavigateToDetail = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };
  return (
    <Container ref={ref} className="my-4">
      <Dots className="w-[100px] gap-20" />
      <HeadingH1 text={"Projects"} className="text-center" />
      <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectsData.map((project) => (
          <a
            // for event right click
            href={`/projects/${project.projectId}`}
            key={project.projectId}
            className="boder-[#d1d1d1] group relative aspect-square w-full overflow-hidden rounded-lg border hover:cursor-pointer"
            // onClick={(e) => {
            //   e.preventDefault();
            //   handleNavigateToDetail(project.projectId);
            // }}
            target="__blank"
          >
            <Image
              src={project.projectImage[0]}
              alt={project.projectName}
              className="h-full w-full object-cover transition-transform duration-300"
              quality={100}
              fill
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="text-[18px] font-bold text-warning-msg-text">
                {project.projectName}
              </h1>
              <button
                className="mt-2 rounded-md bg-primary-color px-4 py-2 text-white"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent button click from triggering the anchor's `onClick`
                  handleNavigateToDetail(project.projectId);
                }}
              >
                <Eye />
              </button>
            </div>
          </a>
        ))}
      </div>
      <div className="flex items-end justify-end">
        <Dots className="gap-20" />
      </div>
    </Container>
  );
}

export default Projects;
