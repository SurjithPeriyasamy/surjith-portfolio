import netflix from "../images/netflix.png";
import youtube from "../images/youtube.png";
import sdfood from "../images/sdfood.png";
import food_gear from "../images/food_gear.png";
import { BiSolidMoviePlay } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
export const stacks = ["React", "Tailwind CSS", "Redux"];

export const projects = [
  {
    title: "NETFLIX GPT",
    id: 1,
    image: netflix,
    techStack: stacks,
    brand: BiSolidMoviePlay,
    overView:
      "Netflix GPT Project is OTT Platform that allows users to watch movies for entertainment and something else, with the trailer,release date and some details of them.Integrate GPT Search like openai,it gives some movie sugesstions that what the users will need.",
    webUrl: "https://baby-dev-netflixgpt.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/netflix-gpt",
  },
  {
    title: "FOOD GEAR",
    id: 2,
    image: food_gear,
    techStack: stacks,
    brand: IoFastFoodSharp,
    overView:
      "Food Gear project is online food ordering Platform that allows users to order a food from home.This website making it easy for customers to find and buy the foods what they need.",
    webUrl: "https://sdev-foodgear.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/Mini-swiggy",
  },
  {
    title: "YOUTUBE CLONE",
    id: 3,
    image: youtube,
    techStack: stacks,
    brand: AiFillYoutube,
    overView:
      "Youtube Clone Project is Online Platform that allows users to watch videos for entertainment,study or something else.This web app provides a SearchEngine for finding videos what user wants.Integrate a chat looks like Live Chat using API Polling mechanism.",
    webUrl: "https://surjith-youtube.netlify.app",
    gitHubCode: "https://github.com/SurjithPeriyasamy/youtube-gear",
  },
  {
    title: "SD FOOD",
    id: 4,
    image: sdfood,
    techStack: stacks,
    brand: IoFastFoodSharp,
    overView:
      "SD Food project is online food ordering Platform that allows users to order a food from home.This website making it easy for customers to find and buy the foods what they need.",
    webUrl: "https://sd-food.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/namaste-react",
  },
];
