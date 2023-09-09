import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";
import userContext from "../utils/userContext";
const Body = () => {
  return (
    <div>
      <userContext.Provider
        value={{
          name: "Surjith.dev",
          mail: "mahindhiran005@gmail.com",
          location: "Tamilnadu, India",
        }}
      >
        <Header />
        <Home />
        <About />
        <ProjectsContainer />
        <Contact />
      </userContext.Provider>
    </div>
  );
};

export default Body;
