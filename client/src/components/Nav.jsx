import React from "react";
import { Link, useLocation } from "react-router-dom";
import JournalismLogo from "../assets/JournalismLogo.png";

const links = ["home", "about"];
const social = [];

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="sm:py-8 py-2 pl-8 border-b-2 border-red bg-beige drop-shadow-2xl shadow-red z-50 ">
      <div className="w-full flex items-center sm:flex-row flex-col">
        <div>
          <img
            src={JournalismLogo}
            alt=""
            className="w-[150px] sm:w-[250px] block "
          />
        </div>
        <div className="text-center mx-auto">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-title justify-self-center">
            The ASTI Phoenix
          </h1>
          <div className="flex justify-center gap-8 mt-4">
            {links.map((item) => (
              <div key={item}>
                <Link
                  to={item}
                  className={`font-serif ${
                    location.pathname.slice(1).split('/').join() === item ? "opacity-50" : "opacity-100"
                  } hover:opacity-50 transition-all duration-200 capitalize`}
                >
                  {item}
                </Link>
              </div>
            ))}
            <div className="flex gap-3 text-xl">
              <a
                target="blank"
                href="https://www.instagram.com/astijournalism/"
              >
                <i class="fab fa-youtube text-black opacity-70"></i>
              </a>
              <a target="blank" href="https://www.youtube.com/@ASTIPhoenix">
                <i class="fab fa-instagram text-black opacity-70"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
