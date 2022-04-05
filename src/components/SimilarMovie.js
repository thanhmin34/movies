import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "./config";
// https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=92f81e121c32d0b9ad19e4e7851187ca
const SimilarMovie = ({ movieId }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=92f81e121c32d0b9ad19e4e7851187ca`,
    fetcher
  );
  if (!data?.results || data?.results.length <= 0) return null;
  const loading = !data & !error;
  const movies = data.results;
  // console.log(movies);
  return (
    <div className="basis-3/12  my-5 p-2">
      <h1 className="font-medium text-3xl mb-5">Similar to this</h1>
      <div className="similar-item text-white overflow-y-scroll h-[400px] scrollbar relative">
        {movies.map((item) => (
          <SlimilarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

function SlimilarItem({ item }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movie/${item.id}`)}
      key={item.id}
      className="flex flex-row mb-3 cursor-pointer"
    >
      <div className="w-[70px] h-[120px] ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col py-2 px-4 text-sm flex-1">
        <p className="text-overflow-2">{item.title} </p>
        <div className="flex flex-row items-center justify-start mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span className="text-sm ml-2">{item.vote_average}</span>
        </div>
      </div>
    </div>
  );
}
export default SimilarMovie;
