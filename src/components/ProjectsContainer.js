import React from "react";
import Projects from "./Projects";
import { projects } from "../utils/constants";

const ProjectsContainer = () => {
  return (
    <div className="bg-neutral-50">
      <div className="max-w-5xl m-auto">
        <h1 className="font-bold text-lg text-blue-700 my-5">PROJECTS</h1>
        <div className="flex flex-col gap-14">
          {projects.map((project) => {
            console.log(project.title);
            return (
              <Projects
                key={project.id}
                title={project.title}
                image={project.image}
                techStack={project.techStack}
                overview={project.overView}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
