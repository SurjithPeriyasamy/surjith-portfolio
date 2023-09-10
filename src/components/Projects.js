import React from "react";

const Projects = ({
  overview,
  title,
  image,
  techStack,
  webUrl,
  Brand,
  code,
  demo,
  githubCode,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center bg-white py-9 p-5 rounded-lg shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)]">
      <a
        className="max-w-lg"
        href={webUrl}
        rel="external noreferrer"
        target="_blank"
      >
        <img className="rounded-md shadow-xl" alt="projects" src={image} />
      </a>
      <div className="max-w-lg">
        <h1 className="font-bold justify-center items-center mb-3 flex gap-3">
          {title} <Brand className="text-2xl text-cyan-700 animate-pulse" />
        </h1>
        <p className="text-gray-500 font-semibold">{overview}</p>
        <ul className="flex justify-center mt-4 flex-wrap gap-5">
          {techStack.map((stack, i) => (
            <li
              key={i}
              className="font-semibold bg-white rounded-lg shadow-xl px-3 py-2"
            >
              {stack}
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row justify-center  md:gap-8">
          <a href={githubCode} rel="external noreferrer" target="_blank">
            <h1 className="flex justify-center items-center duration-200 hover:text-cyan-700 text-xl gap-3 mt-5 font-semibold">
              Code
              <span className="text-2xl  animate-bounce">{code}</span>
            </h1>
          </a>
          <a href={webUrl} rel="external noreferrer" target="_blank">
            <h1 className="flex justify-center items-center duration-200 hover:text-cyan-700 text-xl gap-3 mt-5 font-semibold">
              Live Demo
              <span className="text-2xl  animate-bounce">{demo}</span>
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
