import React from "react";
import workDesk from "../images/workdesk.jpg";
import workingMan from "../images/WorkingMan.png";
const About = () => {
  const role = "Front-End Web Developer".split("");
  console.log(role);
  return (
    <div className="max-w-6xl m-auto px-10 my-32 ">
      <div className="flex gap-20">
        <div className="max-w-md relative">
          <img className="h-full rounded-xl" alt="workdesk" src={workDesk} />
          <div className="absolute h-44 w-44 flex justify-center items-center  -bottom-10 -right-16 bg-white rounded-full p-5">
            <img className=" h-16" alt="man" src={workingMan} />
            <h1 className="w-full h-full absolute animate-spin-slow">
              {role.map((text, i) => {
                return (
                  <span
                    key={i}
                    style={{ transform: "rotate(" + i * 14.2 + "deg)" }}
                    className={
                      "absolute font-semibold left-1/2 text-lg  origin-[0_90px] "
                    }
                  >
                    {text.toUpperCase()}
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
        <div className="max-w-lg">
          <h2 className="text-blue-600 font-bold text-lg">ABOUT ME</h2>
          <h1 className="font-bold text-2xl my-5">
            A dedicated Front-end Developer based in Tamilnadu, India 📍
          </h1>
          <p className="text-gray-500 text-lg">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React,Redux, Tailwind CSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
