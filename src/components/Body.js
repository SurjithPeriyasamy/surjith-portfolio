import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer";

const Body = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <ProjectsContainer />
    </div>
  );
};

export default Body;
