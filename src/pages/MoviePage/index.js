import React from "react";
import { LogoMovie } from "../../components/Sidebar";
import { SearchMovies } from "../../components/SideSearch";
import MovieList from "./MovieList";
import Video from "../../Video/Video";
const index = () => {
  return (
    <div className="flex flex-col max-w-[1280px]  mx-auto px-5 text-white">
      {/* <header className="flex flex-row justify-between items-center ">
        <LogoMovie my="my-5"></LogoMovie>
        <div className="text-white">Avatar</div>
       
      </header>
      <MovieList></MovieList> */}
      <Video />
    </div>
  );
};

export default index;
