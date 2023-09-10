import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";
import userContext from "../utils/userContext";
import Footer from "./Footer";
import Certification from "./Certification";
const Body = () => {
  return (
    <div className="font-Poppins">
      <userContext.Provider
        value={{
          name: "Surjith.dev",
          role: "Front-End Web Developer",
          mail: "mahindhiran005@gmail.com",
          location: "Tamilnadu, India",
          gitHubProfile: "https://github.com/SurjithPeriyasamy",
          linkedInProfile: "https://www.linkedin.com/in/surjith-p-dev005",
        }}
      >
        <Header />
        <Home />
        <About />
        <Certification />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </userContext.Provider>
    </div>
  );
};

export default Body;
