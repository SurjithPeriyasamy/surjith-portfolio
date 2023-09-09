import React from "react";

const MailAndLocation = ({ title, Icon, content, isMail }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <Icon className="text-xl p-4 text-blue-600 h-16 w-16 bg-white shadow-xl rounded-full" />
      </div>
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        {isMail === true ? (
          <a href={"mailto:" + content} rel="noreferrer">
            <h1 className="font-semibold text-lg hover:text-blue-600 text-gray-600">
              {content}
            </h1>
          </a>
        ) : (
          <h1 className="font-semibold text-lg text-gray-600">{content}</h1>
        )}
      </div>
    </div>
  );
};

export default MailAndLocation;
