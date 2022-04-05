import React from "react";
import SearchMovies from "../../components/SearchMovies";
import { LogoMovie } from "../../components/Sidebar";

const HeaderMoviePage = () => {
  return (
    <div className="flex flex-row items-center justify-between px-2">
      <LogoMovie></LogoMovie>
      <SearchMovies></SearchMovies>
      {/* <SearchMovies></SearchMovies>
       */}
    </div>
  );
};

export default HeaderMoviePage;
