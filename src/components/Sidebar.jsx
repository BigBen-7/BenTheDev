/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { PiPhoneLight } from "react-icons/pi";
// import { BsArrowDown } from "react-icons/bs";

const sidebarLinks = [
  { to: "/home", icon: <GoHome /> },
  { to: "/about", icon: <FaRegUser /> },
  { to: "/project", icon: <TbBrandVscode /> },
  { to: "/contact", icon: <PiPhoneLight /> },
];

const Sidebar = () => {
  const navStyle = "flex flex-row-reverse md:flex-col  items-center ";
  const linkIcons = "flex md:flex-col  bg-black md:bg-transparent";
  const sidebarLinkClasses =
    "py-6 mx-[32.5px] hover:bg-green-400 rounded-full ease-in duration-300";

  return (
    <aside className="  md:bg-green-950 text-white flex">
      <nav className={navStyle}>
        <h2 className="text-lg hidden md:block  font-bold bg-green-800 p-4">
          BEN
        </h2>
        <div className={linkIcons}>
          {sidebarLinks.map(({ to, icon }, index) => (
            <Link key={index} to={to} className={sidebarLinkClasses}>
              {icon}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
