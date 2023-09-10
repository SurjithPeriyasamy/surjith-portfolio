import React from "react";
import Projects from "./Projects";
import { projects } from "../utils/projectDetails";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
const ProjectsContainer = () => {
  return (
    <div id="projects" className="py-20 md:py-32 px-2">
      <div className="max-w-6xl px-5 md:px-10 m-auto ">
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
                webUrl={project.webUrl}
                code={<AiFillGithub />}
                Brand={project.brand}
                githubCode={project.gitHubCode}
                demo={<BiLinkExternal />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
