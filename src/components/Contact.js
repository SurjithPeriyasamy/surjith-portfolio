import React, { useContext } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import MailAndLocation from "./MailAndLocation";
import userContext from "../utils/userContext";
const Contact = () => {
  const { location, mail } = useContext(userContext);
  return (
    <div className="max-w-5xl m-auto py-32">
      <h3 className="text-blue-600 font-bold text-lg">CONTACT</h3>
      <h1 className="font-bold text-2xl my-2">Don't be shy! Hit me up! 👇</h1>
      <div className="flex flex-col md:flex-row gap-28 mt-14">
        <MailAndLocation
          title={"Location"}
          Icon={FaMapLocationDot}
          content={location}
          isMail={false}
        />
        {mail && (
          <MailAndLocation
            title={"Mail"}
            Icon={FiMail}
            content={mail}
            isMail={true}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
