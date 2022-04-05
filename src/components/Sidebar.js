import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 sticky top-0 lg:hidden border-right flex flex-col  text-white w-[200px] max-w-[300px] h-screen px-5 xl:w-[70px] xl:px-2">
      <div className="border-rigth flex flex-col text-white ">
        <LogoMovie my="my-10 xl:hidden  "></LogoMovie>
        <div className="text-white p-4 xl:p-2 xl:mt-4 xl:flex xl:flex-col xl:items-center xl:justify-center">
          <h3 className="font-medium text-sm xl:hidden">MENU</h3>
          <ul className="mt-4 text-sm font-medium">
            <div className="text-basic mb-1 hidden xl:block">
              <Logo h1="8" h2="8" />
            </div>
            <SideBarLi
              title="Home"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              }
            />
            <SideBarLi
              title="Movies"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              }
            />

            <SideBarLi
              title="Coming soon"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
            />
            <SideBarLi
              title="Log in"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              }
            />
          </ul>
        </div>

        <div className="text-white p-4 none">
          <h3 className="font-medium text-sm">PERSONAL</h3>
          <ul className="mt-4 text-sm font-medium">
            <SideBarLi
              title="Log in"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

function SideBarLi({ title, svg }) {
  return (
    <li className="py-[10px] flex items-center justify-start cursor-pointer">
      <span className="mr-2 xl:flex-1 xl:ml-2">{svg}</span>{" "}
      <p className="none">{title}</p>
    </li>
  );
}

export function LogoMovie({ my }) {
  return (
    <NavLink to={"/"}>
      <div className={`flex items-center flex-row justify-center ${my}`}>
        <div className="flex items-center justify-center text-basic mr-1">
          <Logo h1="h-10" h2="w-10" />
        </div>
        <h2 className="text-xl">
          Exxmon<span className="text-[#d22f27] text-2xl">.</span>
        </h2>
      </div>
    </NavLink>
  );
}

export function Logo({ h1, h2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${h1} ${h2}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}
