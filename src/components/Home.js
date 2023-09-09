import React from "react";
import profile from "../images/profile.jpg";
import wavingHand from "../images/wavingHand.svg";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
const Home = () => {
  const techStackLogos = [
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    "https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
    "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png",
  ];
  return (
    <div className="bg-neutral-50 md:h-screen">
      <div className="max-w-5xl px-10 pt-48 m-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-24">
          <div className="max-w-lg">
            <h1 className="font-bold text-6xl my-5">
              Front-End React
              <blockquote className="flex items-center gap-3">
                Developer <img className="h-16" alt="hand" src={wavingHand} />
              </blockquote>
            </h1>
            <p className="text-lg text-gray-700">
              Hi, I'm Surjith Periyasamy. A passionate Front-end React Developer
              based in Tamilnadu, India. 📍
            </p>
            <p className="flex gap-14 mt-9">
              <a
                href="https://github.com/SurjithPeriyasamy"
                rel="external noreferrer"
                target="_blank"
              >
                <AiFillGithub className="text-4xl hover:text-blue-600 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/surjith-p-dev005"
                rel="external noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin className="text-4xl  hover:text-blue-600 cursor-pointer" />
              </a>
            </p>
          </div>
          <div className="">
            <img className="rounded-full h-80" alt="profile" src={profile} />
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-7 mt-28">
          <h1 className="font-semibold text-lg">Tech Stacks</h1>
          <span className="mr-5 text-2xl"> |</span>
          {techStackLogos.map((stack, i) => (
            <li key={i} className="bg-white shadow-xl rounded-full p-3">
              <img className="h-9" alt="html" src={stack} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
