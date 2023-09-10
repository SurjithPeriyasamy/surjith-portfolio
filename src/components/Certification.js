import React from "react";
import certificate from "../images/react-certificate.png";
import { PiCertificateBold } from "react-icons/pi";
import { BiLinkExternal } from "react-icons/bi";
const Certification = () => {
  return (
    <div className="bg-neutral-50">
      <div
        id="certification"
        className=" max-w-5xl px-20 md:px-10  py-36 m-auto"
      >
        <h1 className="text-3xl font-semibold text-blue-800 my-5">
          Certification
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="max-w-lg">
            <img alt="certificate" src={certificate} />
          </div>
          <div className="max-w-lg">
            <h1 className="flex justify-center items-center gap-3 text-xl font-semibold">
              NAMASTE REACT
              <PiCertificateBold className="text-2xl animate-pulse text-cyan-700" />
            </h1>
            <p className="text-gray-500 font-semibold my-5">
              Namaste Dev is an online platform to learn FrontEnd Development
              related course. So I join for learn React JS Developer
              Course(Namaste React). Now I finished ReactJS Course with valid
              cerification authorized by AkshaySaini(founder of Namaste Dev).
            </p>
            <a
              href="https://courses.namastedev.com/learn/certificate/8482819-142240"
              rel="external noreferrer"
              target="_blank"
              className="flex justify-center hover:text-fuchsia-700 font-semibold gap-3 items-center text-xl"
            >
              Certificate
              <BiLinkExternal className="animate-bounce text-fuchsia-800 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
