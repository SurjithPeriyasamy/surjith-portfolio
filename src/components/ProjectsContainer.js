import React from "react";
import Projects from "./Projects";
import { projects } from "../utils/constants";
import { AiFillGithub } from "react-icons/ai";
const ProjectsContainer = () => {
  return (
    <div className="bg-neutral-50  py-32 px-2">
      <div className="max-w-5xl m-auto">
        <h1 className="font-bold text-2xl text-blue-700 my-5">PROJECTS</h1>
        <div className="flex flex-col gap-14 p-10 md:p-0">
          {projects.map((project) => {
            console.log(project.title);
            return (
              <Projects
                key={project.id}
                title={project.title}
                image={project.image}
                techStack={project.techStack}
                overview={project.overView}
                githubProfile={project.webUrl}
                code={<AiFillGithub />}
                Brand={project.brand}
                githubCode={project.gitHubCode}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
