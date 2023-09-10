import netflix from "../images/netflix.png";
import youtube from "../images/youtube.png";
import foodGear from "../images/foodGear.png";
import { BiSolidMoviePlay } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
export const stacks = ["React", "Tailwind CSS", "Redux"];

export const projects = [
  {
    title: "FOOD GEAR",
    id: 1,
    image: foodGear,
    techStack: stacks,
    brand: IoFastFoodSharp,
    overView:
      "Food Gear project is online food ordering Platform that allows users to order a food from home.This web app Using Swiggy's API for fetching Restaurant details and display it to the user.",
    webUrl: "https://foodgear.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/namaste-react",
  },
  {
    title: "NETFLIX GPT",
    id: 2,
    image: netflix,
    techStack: stacks,
    brand: BiSolidMoviePlay,
    overView:
      "Netflix GPT Project is OTT Platform that allows users to watch movies for entertainment and something else.This web app Using TMDB API for Fetching videos and details of Movies,And platform.openai API for GPT Search.",
    webUrl: "https://baby-dev-netflixgpt.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/netflix-gpt",
  },
  {
    title: "YOUTUBE CLONE",
    id: 3,
    image: youtube,
    techStack: stacks,
    brand: AiFillYoutube,
    overView:
      "Youtube Clone Project is Online Platform that allows users to watch videos for entertainment,study or something else.This web app Using Youtube API for fetching Videos,Comments and Details.",
    webUrl: "https://surjith-youtube.netlify.app",
    gitHubCode: "https://github.com/SurjithPeriyasamy/youtube-gear",
  },
];
