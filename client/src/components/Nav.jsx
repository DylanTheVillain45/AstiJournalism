import React from "react";
import { Link } from "react-router-dom";
import JournalismLogo from "../assets/JournalismLogo.png";

const links = ["home", "about"];
const social = [];

const Nav = () => {
  return (
    <nav className="py-8 sm:py-2 pl-8 border-b-2 border-red bg-beige drop-shadow-2xl shadow-red z-50 ">
      <div className="w-full flex items-center">
        <div>
          <img
            src={JournalismLogo}
            alt=""
            className="w-[250px] sm:block hidden"
          />
        </div>
        <div className="text-center mx-auto">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-title justify-self-center">
            The ASTI Phoenix
          </h1>
          <div className="flex justify-center gap-8 mt-4">
            {links.map((item, index) => (
              <div key={index}>
                <Link
                  to={item}
                  className="font-serif hover:text-gray-500 transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
