import React from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="p-4 mx-auto">
        <div className="flex justify-around items-center">
          <Link to="/" title="JobClub" className="font-bold text-2xl">
            JobClub
          </Link>
          <ul className="md:flex gap-5 hidden">
            <li>
              <NavLink
                to="/"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobapplied"
                title="Job Applied"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Job Applied
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Statistics
              </NavLink>
            </li>
          </ul>
          <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-2 px-3 font-bold rounded-md">
            <NavLink>Start Applying</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
