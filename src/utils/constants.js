import netflix from "../images/netflix.png";
import youtube from "../images/youtube.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export const stacks = ["React", "Tailwind CSS", "Redux"];

export const projects = [
  {
    title: "NETFLIX GPT  🎥",
    id: 1,
    image: netflix,
    techStack: stacks,
    brand: AiFillGithub,
    overView:
      "Netflix GPT Project is OTT Platform that allows users to watch movies for entertainment and something else.This web app Using TMDB API for Fetching videos and details of Movies,And platform.openai API for GPT Search.",
    webUrl: "https://baby-dev-netflixgpt.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/netflix-gpt",
  },
  {
    title: "YOUTUBE CLONE ⏯️",
    id: 2,
    image: youtube,
    techStack: stacks,
    brand: AiFillLinkedin,
    overView:
      "Youtube Clone Project is Online Platform that allows users to watch videos for entertainment,study or something else.This web app Using Youtube API for fetching Videos,Comments and Details.",
    webUrl: "https://surjith-youtube.netlify.app",
    gitHubCode: "https://github.com/SurjithPeriyasamy/youtube-gear",
  },
];
