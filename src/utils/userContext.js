import { createContext } from "react";

const userContext = createContext({
  name: "Surjith.Dev",
  role: "Front-End Web Developer",
  location: "Tamilnadu, India",
  mail: "mahindhiran005@gmail.com",
  gitHubProfile: "https://github.com/SurjithPeriyasamy",
  linkedInProfile: "https://www.linkedin.com/in/surjith-p-dev005",
});

export default userContext;
