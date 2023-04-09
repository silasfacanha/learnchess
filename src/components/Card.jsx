import React from "react";

export const Card = ({ image, caption }) => {
  return (
    <div className="flex  m-2 h-[20%] w-[27%] ">
      <div className=" bg-white text-black border-green-800 object-contain rounded-lg ">
        <img src={image} alt="" className="rounded-lg" />
        <p className="flex p-2 justify-center bg-green-800 text-white rounded-lg">
          {caption}
        </p>
      </div>
    </div>
  );
};
