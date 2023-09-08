import React from "react";

const Projects = ({ overview, title, image, techStack }) => {
  return (
    <div className="flex gap-16 bg-white p-5 rounded-lg shadow-2xl">
      <img className="rounded-lg max-w-lg" alt="projects" src={image} />
      <div className="max-w-lg">
        <h1 className="font-bold text-center mb-3">{title}</h1>
        <p>{overview}</p>
        <ul className="flex flex-wrap gap-5">
          {techStack.map((stack, i) => (
            <li
              key={i}
              className="font-semibold bg-white rounded-lg shadow-xl p-3"
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
