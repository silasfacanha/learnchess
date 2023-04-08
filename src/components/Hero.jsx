import React from "react";

export const Hero = () => {
  return (
    <div className="flex items-center h-[95vh] w-full p-4">
      <div className="mx-auto">
        <h1 className="flex justify-center text-3xl m-4">
          Become the best Chess Player Amongst your Friends.
        </h1>
        <p className="flex justify-center text-green-950 m-4">
          Join us and, through exercises and quick lessons, acquire
          grandmaster's abilities.
        </p>
        <div className="flex justify-center">
          <button className="flex justify-center items-center  bg-green-700 text-white p-4 m-4 rounded-full">
            Boost your Chess IQ!
          </button>
        </div>
      </div>
    </div>
  );
};
