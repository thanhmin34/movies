import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white mt-10 flex items-center justify-center mx-auto mb-5 text-md font-bold gap-x-5 cursor-pointer">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-basic" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) => (isActive ? "text-basic" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
