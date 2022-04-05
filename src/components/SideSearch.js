import React, { useEffect, useState } from "react";
import useSWR from "swr";
import useDebounce from "./Hooks/useDebounce";
import { fetcher } from "./config";
import { useNavigate } from "react-router-dom";
import SearchMovies from "./SearchMovies";
// https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1
// https://api.themoviedb.org/3/movie/upcoming?api_key=92f81e121c32d0b9ad19e4e7851187ca
const SideSearch = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca",
    fetcher
  );
  const loading = !data && !error;
  const movielist = data?.results || [];

  return (
    <div className=" sticky top-0 w-[250px] max-w-[250px] h-screen border-left flex flex-col  px-5">
      <SearchMovies value={movielist} mt10="mt-10"></SearchMovies>
      <ListMovieSearch
        title="Up Coming"
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=92f81e121c32d0b9ad19e4e7851187ca"
        }
      />
      <ListMovieSearch
        title="Popular Movies"
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca"
        }
      />
    </div>
  );
};

export function CartItemMovie({ value }) {
  const navigate = useNavigate();
  // console.log(value);
  return (
    <div
      onClick={() => navigate(`/movie/${value.id}`)}
      className="cart-item-movie flex items-center justify-start mt-2 mb-4 cursor-pointer "
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
        alt=""
        className="w-[44px] object-cover rounded-md "
      />
      <div className="flex flex-col text-[10px] text-[#bbbbbb] font-[400] ml-2 ">
        <h3 className="text-[#e2e2e3] text-[12px]">
          {value.title || value.original_title}
        </h3>
        <div className="flex flex-row items-center">
          <span className="mt-[2px]">Actions, Horror</span>
        </div>
        <div className="flex flex-row mt-3  px-2">
          <span>{value.vote_average}</span>
        </div>
      </div>
    </div>
  );
}

function ListMovieSearch({ title, url }) {
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const movielist = data?.results || [];
  return (
    <div className="list-movie-search flex flex-col mx-5 ">
      <h2 className="font-medium text-md text-white mt-10">{title}</h2>
      {loading && (
        <div className="fixed mt-[185px] ml-20 w-[50px] h-[50px] border-4 border-basic border-l-transparent rounded-full  animate-spin mx-auto"></div>
      )}
      <div className="overflow-y-scroll h-[250px] scrollbar ">
        {movielist.map((item) => (
          <CartItemMovie value={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
export default SideSearch;

// 92f81e121c32d0b9ad19e4e7851187ca
