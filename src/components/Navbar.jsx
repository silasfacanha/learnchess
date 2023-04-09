import React, { useState } from "react";
import { ReactDOM } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Alumni } from "./Alumni";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-[#ffff] text-green-800 border-b-2">
        <h1 className="p-4 font-bold text-2xl font-serif underline-offset-3 cursor-pointer">
          LEARN CHESS
        </h1>
        <ul className="hidden md:flex  text-2xl font-serif  justify-between w-[50%] mr-10 ">
          <Link to="#home" smooth>
            {" "}
            <li className="p-4 cursor-pointer">home</li>
          </Link>
          <li className="p-4 cursor-pointer">
            {" "}
            <Link to="#learn" smooth>
              {" "}
              learn
            </Link>
          </li>
          <Link to="#alumni" smooth>
            {" "}
            <li className="p-4 cursor-pointer">alumni</li>
          </Link>
          <Link to="#contact" smooth>
            <li className="p-4 cursor-pointer">contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block p-4 md:hidden">
          {nav ? "" : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[100%] text-3xl bg-[#ffff] ease-in-out duration-500"
            : "fixed text-3xl top-0 h-full ease-in-out duration-500 left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 border-b-2 flex justify-between items-center border-green-700">
            Home{" "}
            <div className="text-green-800">
              {" "}
              <AiOutlineClose size={20} onClick={handleNav} />{" "}
            </div>
          </li>
          <li className="p-4 border-b-2 border-green-700">Learn</li>
          <li className="p-4 border-b-2 border-green-700">Alumni</li>
          <li className="p-4 border-b-2 border-green-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};
