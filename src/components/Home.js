import React from "react";
import profile from "../images/profile1.png";
import wavingHand from "../images/wavingHand.svg";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import { BiLinkExternal } from "react-icons/bi";
import { RESUME_LINK, TECH_STACK_LOGOS } from "../utils/constants";

const Home = () => {
  return (
    <div id="home" className="bg-neutral-50">
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
              <div className="text-4xl hover:text-blue-600 duration-300 cursor-pointer">
                <GitHub />
              </div>
              <div className="text-4xl hover:text-blue-600 duration-300 cursor-pointer">
                <LinkedIn />
              </div>
            </div>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center tracking-wider items-center lg:justify-normal mt-12  gap-3 text-xl text-gray-800 font-semibold hover:text-cyan-700"
            >
              Resume
              <BiLinkExternal className="animate-bounce text-2xl text-cyan-700" />
            </a>
          </div>
          <div className="min-w-fit lg:self-baseline self-center">
            <img
              className="rounded-tl-[125px] rounded-br-[125px] h-[295px] w-[275px] md:scale-110 duration-500 ease-out bg-gray-300 shadow-[0_0_20px_3px] shadow-zinc-300"
              alt="profile"
              src={profile}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-7 mt-12 lg:mt-24">
          <div className="flex gap-10 items-center shrink-0">
            <h1 className="font-semibold text-lg underline lg:no-underline">
              Tech Stacks
            </h1>
            <span className="mr-5 text-2xl hidden lg:block"> |</span>
          </div>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 place-items-center">
            {TECH_STACK_LOGOS.map((stack, i) => (
              <li
                key={i}
                className="relative group bg-white shadow-md rounded-full p-3 hover:shadow-xl transition-shadow"
              >
                <img
                  className="h-8 group-hover:rotate-180 transition-transform duration-500"
                  alt={stack.name}
                  src={stack.logo}
                />
                <span className="absolute group-hover:bottom-full bottom-0 mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm bg-black bg-opacity-80 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  {stack.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
