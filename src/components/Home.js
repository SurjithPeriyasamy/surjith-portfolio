import React from "react";
import profile from "../images/profile1.png";
import wavingHand from "../images/wavingHand.svg";
import { AiFillGithub } from "react-icons/ai";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
const Home = () => {
  const techStackLogos = [
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    "https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
    "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png",
  ];
  // h-64 w-60 md:h-80 md:w-80
  return (
    <div id="home" className="bg-neutral-50 ">
      <div className="max-w-5xl px-10 pt-28 lg:pt-48 pb-12 m-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-24">
          <div className="max-w-md md:max-w-lg text-center lg:text-start">
            <h1 className="font-bold text-zinc-700 select-none  text-4xl  md:text-6xl my-5">
              Front-End React
              <blockquote className="flex justify-center lg:justify-normal items-center gap-1">
                Developer
                <img
                  className="md:h-16 h-10 animate-[wave_2s_ease-in-out_infinite]"
                  alt="hand"
                  src={wavingHand}
                />
              </blockquote>
            </h1>
            <p className="text-lg text-gray-700">
              Hi, I'm Surjith Periyasamy. A passionate Front-end React Developer
              based in Tamilnadu, India📍
            </p>
            <div className="flex justify-center lg:justify-normal gap-14 mt-9">
              <div className="text-4xl hover:text-blue-600 cursor-pointer">
                <GitHub />
              </div>
              <div className="text-4xl hover:text-blue-600 cursor-pointer">
                <LinkedIn />
              </div>
            </div>
            <a
              href="https://github.com/SurjithPeriyasamy/surjith-portfolio"
              target="_blank"
              rel="external noreferrer"
              className="flex justify-center lg:justify-normal mt-12 gap-3 text-lg text-gray-800 font-semibold hover:text-cyan-700"
            >
              Code for This Portfolio
              <AiFillGithub className="text-3xl text-cyan-700 animate-bounce" />
            </a>
          </div>
          <div className="min-w-fit lg:self-baseline self-center">
            <img
              className=" rounded-full h-[292px] w-[275px] md:scale-110 duration-500 ease-out bg-[#8e8e8e] shadow-[0_0_20px_6px] shadow-gray-300"
              alt="profile"
              src={profile}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-7 mt-12 lg:mt-28">
          <div className="flex gap-10 items-center">
            <h1 className="font-semibold text-lg underline lg:no-underline">
              Tech Stacks
            </h1>
            <span className="mr-5 text-2xl hidden lg:block"> |</span>
          </div>
          <ul className="grid grid-cols-3 lg:grid-flow-col gap-x-10 gap-y-3">
            {techStackLogos.map((stack, i) => (
              <li key={i} className="bg-white shadow-xl rounded-full p-3 ">
                <img
                  className="h-9 hover:rotate-[360deg] duration-500"
                  alt="html"
                  src={stack}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
