import React from "react";
import profile from "../images/profile.jpg";
import wavingHand from "../images/wavingHand.svg";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
const MainContainer = () => {
  const techStackLogos = [
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    "https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
    "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png",
  ];
  return (
    <div className="flex flex-col pt-32 w-full">
      <div className="flex gap-16 justify-center">
        <div className="basis-1/3">
          <h1 className="font-bold text-6xl my-5">
            Front-End React
            <blockquote className="flex items-center">
              Developer <img className="h-16" alt="hand" src={wavingHand} />
            </blockquote>
          </h1>
          <p className="text-lg text-gray-700">
            Hi, I'm Surjith Periyasamy. A passionate Front-end React Developer
            based in Tamilnadu, India. 📍
          </p>
          <p className="flex gap-14 mt-9">
            <AiFillGithub className="text-4xl hover:text-blue-600 cursor-pointer" />
            <AiOutlineLinkedin className="text-4xl  hover:text-blue-600 cursor-pointer" />
          </p>
        </div>
        <div className="basis-1/4">
          <img className="rounded-full h-80" alt="profile" src={profile} />
        </div>
      </div>
      <ul className="mx-auto flex items-center gap-6 mt-8">
        <h1 className="font-semibold text-lg">Tech Stacks</h1>
        {techStackLogos.map((stack) => (
          <li className="bg-white shadow-xl rounded-full p-3">
            <img className="h-10" alt="html" src={stack} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContainer;
