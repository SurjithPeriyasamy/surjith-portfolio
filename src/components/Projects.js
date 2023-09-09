import React from "react";

const Projects = ({
  overview,
  title,
  image,
  techStack,
  githubProfile,
  Brand,
  code,
  githubCode,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center bg-white p-5 rounded-lg shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)]">
      <a
        className="max-w-lg"
        href={githubProfile}
        rel="external noreferrer"
        target="_blank"
      >
        <img className="rounded-lg " alt="projects" src={image} />
      </a>
      <div className="max-w-lg">
        <h1 className="font-bold text-center mb-3 ">{title}</h1>
        <p className="text-gray-500 font-semibold">{overview}</p>
        <ul className="flex justify-center flex-wrap gap-5">
          {techStack.map((stack, i) => (
            <li
              key={i}
              className="font-semibold bg-white rounded-lg shadow-xl p-3"
            >
              {stack}
            </li>
          ))}
        </ul>
        <a href={githubCode} rel="external noreferrer" target="_blank">
          <h1 className="flex justify-center items-center duration-200 hover:text-fuchsia-700 text-xl gap-3 mt-5 font-semibold">
            Code
            <span className="text-2xl  animate-bounce">{code}</span>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Projects;
