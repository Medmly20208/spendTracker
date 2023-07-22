import React from "react";

const default_image =
  "data:image/png;base64,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";

const NewsCard = ({ title, image, snippet, link }) => {
  return (
    <div className="w-[350px] p-[10px] flex flex-col gap-4">
      <div>
        <img
          onError={(e) => (e.target.src = default_image)}
          src={image || default_image}
          alt={"news image"}
          className="max-h-[138px]"
        />
      </div>
      <div className="px-[10px]">
        <h3>{title}</h3>
        <p className="text-gray-500">{snippet}</p>
      </div>
      <div className="px-[10px] ">
        <a className="mainBtn w-fit" href={link} target="_blank">
          see more details
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
