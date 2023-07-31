import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
const Header = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    {
      name: "Home",
      to: "/",
      title: "Home",
      showActive: ({ isActive }) => (isActive ? "active" : "default"),
    },
    {
      name: "Job Applied",
      to: "/jobApplied",
      title: "Job Applied",
      showActive: ({ isActive }) => (isActive ? "active" : "default"),
    },
    {
      name: "Blogs",
      to: "/blog",
      title: "Blogs",
      showActive: ({ isActive }) => (isActive ? "active" : "default"),
    },
    {
      name: "Statistics",
      to: "/statistic",
      title: "Statistic",
      showActive: ({ isActive }) => (isActive ? "active" : "default"),
    },
  ];
  // console.log(navItems);
  return (
    <>
      <div className="p-4 mx-auto">
        <div className="flex justify-around items-center">
          <Link to="/" title="JobClub" className="font-bold text-2xl">
            JobClub
          </Link>
          <ul className="md:flex gap-5 hidden">
            {navItems.map((item, id) => (
              <li key={id}>
                <NavLink
                  to={item.to}
                  title={item.name}
                  className={item.showActive}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden"
          >
            {nav ? <GrClose /> : <FaBars />}
          </div>
          {nav && (
            <ul className="flex flex-col gap-3 justify-center items-center absolute top-16 left-50 w-full h-1/3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white ">
              {navItems.map((item, id) => (
                <li key={id}>
                  <NavLink
                    to={item.to}
                    title={item.name}
                    className={item.showActive}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <button className="btn-primary">
            <NavLink>Start Applying</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
