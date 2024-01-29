"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../lib/data";
import ProjectItems from "./ProjectItems";
import { useScrollHook } from "@/lib/scrollHooks";

const Projects = () => {
  const {ref} = useScrollHook("Project", 0.5)

  return (
    <section ref={ref} id="project" className=" scroll-mt-28 max-w-[70rem] mb-28 sm:mb-60">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {projects.map((project, index) => (
          <ProjectItems key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
