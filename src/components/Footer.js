import React from "react";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";

const Footer = () => {
  return (
    <div className="bg-zinc-800">
      <div className="py-16 px-10 md:px-0 text-white flex flex-col gap-4 md:flex-row justify-between items-center max-w-5xl mx-auto">
        <p className="font-bold text-lg">
          Copyright &copy; 2023. All rights are reserved
        </p>
        <div className="flex gap-8 text-3xl">
          <div className="hover:scale-125 duration-200">
            <GitHub />
          </div>
          <div className="hover:scale-125 duration-200">
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
