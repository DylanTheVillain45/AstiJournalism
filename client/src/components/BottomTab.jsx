import React from "react";
import JournalismLogo from "../assets/JournalismLogo.png";
import { Link } from "react-router-dom";
const links = ["home", "about"];

const BottomTab = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-36 bg-red rounded-t-xl py-8 relative">
      <div className="flex flex-row items-center w-full justify-center gap-8">
        {links.map((item, index) => (
          <div className="" key={index}>
            <Link
              to={item}
              className="text-white text-2xl hover:text-slate-300 duration-300 transition-all capitalize"
            >
              {item}
            </Link>
          </div>
        ))}
        <div className="text-white text-2xl hover:text-slate-300 duration-300 transition-all capitalize cursor-pointer" onClick={scrollToTop}>
          Back To Top <i classname="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </div>
      </div>
      <div>
        <img src={JournalismLogo} alt="" className="sm:block absolute w-32 hidden top-2 right-2 md:right-10" />
      </div>
    </div>
  );
};

export default BottomTab;