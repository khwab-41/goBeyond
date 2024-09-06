import React from "react";
import logo from "../assets/travel-website-favicon-white.png";
import homeIcon from "../assets/home white.png";
import infoIcon from "../assets/info.png";
import islandOnWaterIcon from "../assets/icons8-island-on-water-50.png";
import contactIcon from "../assets/contact white.png";
import aboutUsIcon from "../assets/about us, white.png";
import breadCrumb from "../assets/icons8-menu-rounded-30.png";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className="w-full min-h-fit p-0 overflow-hidden">
        <div className="flex justify-between items-center w-full">
          <img src={logo} alt="Logo" className="cursor-pointer w-12 m-5" />
          <nav className="flex-1 text-right">
            <ul className="inline-block">
              <li className="inline-block mr-5">
                <a href="#">
                  <img src={homeIcon} alt="Home" className="w-8 ml-4" />
                </a>
              </li>
              <li className="inline-block mr-5">
                <a href="#contact">
                  <img src={infoIcon} alt="Info" className="w-8 ml-4" />
                </a>
              </li>
              <li className="inline-block mr-5">
                <a href="packages.html">
                  <img
                    src={islandOnWaterIcon}
                    alt="Island"
                    className="w-8 ml-4"
                  />
                </a>
              </li>
              <li className="inline-block mr-5">
                <a href="contact.html">
                  <img src={contactIcon} alt="Contact" className="w-8 ml-4" />
                </a>
              </li>
              <li className="inline-block mr-5">
                <button className="bg-transparent border-none cursor-pointer min-w-[2.5em] min-h-[2.5em]">
                  <img
                    src={aboutUsIcon}
                    alt="Login"
                    className="w-10"
                    id="login_btn"
                  />
                </button>
              </li>
            </ul>
          </nav>
          <img
            src={breadCrumb}
            alt="Menu"
            className="cursor-pointer hidden w-8"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
