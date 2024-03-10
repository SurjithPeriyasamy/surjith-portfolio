import netflix from "../images/projects/netflix.png";
import youtube from "../images/projects/youtube.png";
import sdfood from "../images/projects/sdfood.png";
import food_gear from "../images/projects/food_gear.png";
import surjithKart from "../images/projects/surjithKart.png";
import { BiSolidMoviePlay } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";

export const stacks = ["React", "Tailwind CSS", "Redux Toolkit"];

export const projects = [
  {
    title: "SURJTIHKART",
    id: 1,
    image: surjithKart,
    techStack: [...stacks, "Firebase"],
    brand: FaOpencart,
    overView:
      "Ecommerce web app organized with Enabled account creation, updates and deletions via Firebase, Increased product feed engagement 30% and reduced load time 10% with efficient infinite scroll and Implemented multi-category filtering, top-rated sorting, and price sorting using JavaScript.",
    webUrl: "https://surjithkart.netlify.app",
    gitHubCode: "https://github.com/SurjithPeriyasamy/E-commerce",
  },
  {
    title: "FOOD GEAR",
    id: 2,
    image: food_gear,
    techStack: stacks,
    brand: IoFastFoodSharp,
    overView:
      "Food Gear project is online food ordering Platform.Increased user engagement by 15% through dynamic veg filter.Designed cart to enhance single-restaurant checkout flow.Implemented Memoization to achieve 50% reduction in API calls using Redux Toolkit.",
    webUrl: "https://sdev-foodgear.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/Mini-swiggy",
  },
  {
    title: "NETFLIX GPT",
    id: 3,
    image: netflix,
    techStack: [...stacks, "Firebase"],
    brand: BiSolidMoviePlay,
    overView:
      "Built by TMDB's Live API and Firebase authentication.Developed a secure login system that restricts access to the browse page until users successfully authenticate.Developed an AI-powered movie recommendation system.",
    webUrl: "https://babydev-netflixgpt.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/netflix-gpt",
  },

  {
    title: "YOUTUBE CLONE",
    id: 4,
    image: youtube,
    techStack: [...stacks, "Firebase"],
    brand: AiFillYoutube,
    overView:
      "Provided real-time data using YouTube's live API.Data Polling, LRU Caching for dynamic live chat.Debounced & cached search for lag-free typeability (20% faster response) and reduced server load by 30%.",
    webUrl: "https://surjith-youtube.netlify.app",
    gitHubCode: "https://github.com/SurjithPeriyasamy/youtube-gear",
  },
  {
    title: "SD FOOD",
    id: 5,
    image: sdfood,
    techStack: stacks,
    brand: IoFastFoodSharp,
    overView:
      "SD Food project is online food ordering Platform that allows users to order a food from home.This website making it easy for customers to find and buy the foods what they need.",
    webUrl: "https://sd-food.netlify.app/",
    gitHubCode: "https://github.com/SurjithPeriyasamy/namaste-react",
  },
];
