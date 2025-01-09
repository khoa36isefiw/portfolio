import React from "react";
import Dots from "./Dots";
import Container from "./Container";
import HeadingH1 from "./HeadingH1";

import { projectsData } from "@/data/projectsData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye } from "lucide-react";

function Projects() {
  const router = useRouter();
  const handleNavigateToDetail = (projectId: number) => {
    router.push(`/projects/${projectId}`); // navigate to project detail page
  };

  return (
    <Container className="my-4">
      <Dots className="w-[100px] gap-20" />
      <HeadingH1 text={"Projects"} className="text-center" />
      <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectsData.map((project) => (
          <div className="group relative aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src={project.projectImage[0]}
              alt={project.projectName}
              className="h-full w-full object-cover transition-transform duration-300"
              quality={100}
              fill
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="text-warning-msg-text text-[18px] font-bold">
                {project.projectName}
              </h1>
              <button className="mt-2 rounded-md bg-primary-color px-4 py-2 text-white">
                <Eye />
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
