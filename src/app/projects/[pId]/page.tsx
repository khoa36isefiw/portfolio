"use client";
import Container from "@/components/Container";
import HeadingH1 from "@/components/HeadingH1";
import { ProjectInfo } from "@/components/ProjectInfo";
import { IProjectsData, projectsData } from "@/data/projectsData";
import { ChevronLeft, ChevronRight, Code, Paperclip } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

import React, { useState } from "react";

function ProjectDetail() {
  const { pId } = useParams<{ pId: string | undefined }>();
  const rId = pId ? parseInt(pId, 10) : ""; // Convert string to number

  const [imageIndexSelected, setImageIndexSelected] = useState<number>(0);

  if (!rId) {
    return <div>Invalid Project ID</div>; // Handle invalid or undefined ID
  }

  const data: IProjectsData | undefined = projectsData.find(
    (project) => project.projectId === rId,
  );

  const placeholderImage = "/images/placeholder.webp";
  const images = data?.projectImage || [placeholderImage];

  const handleNext = () => {
    setImageIndexSelected((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0,
    );
  };

  const handlePrevious = () => {
    setImageIndexSelected((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1,
    );
  };

  return (
    <Container className="mt-4">
      <HeadingH1
        text={data?.projectName || "Project Not Found"}
        className="text-center"
      />
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <Image
            src={images[imageIndexSelected]}
            alt={"Project Image Detail"}
            quality={100}
            width={800}
            height={400}
            className="h-full max-h-[400px] w-full max-w-[800px]"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={handlePrevious}
            className="mr-4 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
          >
            <ChevronLeft />
          </button>

          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Thumbnail ${index + 1}`}
              quality={100}
              width={80}
              height={80}
              className={`mr-1 h-full max-h-[80px] w-full max-w-[80px] overflow-x-scroll hover:cursor-pointer ${
                index === imageIndexSelected ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setImageIndexSelected(index)}
            />
          ))}

          <button
            onClick={handleNext}
            className="ml-4 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
          >
            <ChevronRight className="hover:cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4">
          <ProjectInfo
            title="Time"
            content={`${data?.timeStart} - ${data?.timeEnd}`}
          />
          <ProjectInfo title="Description" content={data?.desc} />
          <div>
            <ProjectInfo title="Responsibilities" />
            <ul className="list-disc text-[18px]">
              {data?.responsibilities.map((r, index) => (
                <li key={index} className="ml-4">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <ProjectInfo
            title="Technologies"
            content={data?.technologies.join(", ")}
          />

          <a
            target="_blank"
            href={data?.linkSourceCode}
            rel="noopener noreferrer"
            className="mb-1 flex items-center text-[18px] hover:underline"
          >
            <Code size={18} color="#FAAD14" />
            <p className="ml-1">
              <strong className="text-warning-msg-text">Source:</strong>{" "}
              {data?.linkSourceCode}
            </p>
          </a>

          {data?.nameLinkDeployed !== "Not Available" && (
            <a
              target="_blank"
              href={data?.linkDeployed}
              rel="noopener noreferrer"
              className="mb-1 flex items-center text-[18px] hover:underline"
            >
              <Paperclip size={18} color="#FAAD14" />
              <p className="ml-1">
                <strong className="text-warning-msg-text">Website:</strong>{" "}
                {data?.nameLinkDeployed}
              </p>
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ProjectDetail;
