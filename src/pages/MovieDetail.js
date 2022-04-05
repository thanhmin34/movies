import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
// import "video-react/styles/scss/components/menu";
import { Player } from "video-react";
import { fetcher } from "../components/config";
import SimilarMovie from "../components/SimilarMovie";
import HeaderMoviePage from "./MoviePage/HeaderMoviePage";

const MovieDetail = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=92f81e121c32d0b9ad19e4e7851187ca`,
    fetcher
  );
  const loading = !data && !error;
  console.log(data);
  if (!data || data.length <= 0) return null;

  return (
    <div className="w-full max-w-screen-xl mt-5 text-white mx-auto flex flex-col px-5 ">
      <HeaderMoviePage />
      {/* <HeaderMovie></HeaderMovie> */}
      <div className="flex flex-row  justify-start w-full max-w-screen-xl gap-x-10">
        <div className="basis-9/12 flex flex-col my-5 ">
          <MovieVideo movieId={movieId} />
          <BodyMovieDetail item={{ data }} />

          <div className="comments mt-10">
            <h2 className="font-bold text-4xl my-10">Comments</h2>
          </div>
        </div>

        <SimilarMovie movieId={movieId} />
      </div>
    </div>
  );
};

function BodyMovieDetail({ item }) {
  const data = item.data;

  return (
    <div className="flex flex-col mt-10">
      <h2 className="font-medium text-4xl mb-5">{data.title}</h2>
      <div className="flex flex-row items-center justify-start text-sm mb-3">
        <div className="flex flex-row items-center justify-center mr-5">
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
          <span className="ml-1">{data.vote_average}</span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 relative top-[-1px]"
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
          <span className="ml-1">
            {new Date(data.release_date).getFullYear()}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center mb-4">
        {data.genres.length > 0 &&
          data.genres.map((item) => (
            <div
              key={item.id}
              className="border-bg-basic mr-3  px-4 py-[4px] rounded-lg text-center"
            >
              {item.name}
            </div>
          ))}
      </div>
      <p className=" text-base font-medium ">{data.overview}</p>
    </div>
  );
}
// https://www.2embed.ru/embed/tmdb/movie?id=
function MovieVideo({ movieId }) {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=92f81e121c32d0b9ad19e4e7851187ca`,
    fetcher
  );
  console.log(movieId);
  if (!data?.results) return null;
  const loading = !data && !error;
  const video = data?.results;
  console.log(video);
  return (
    <div className="w-full pt-[177,78%] relative h-[500px]">
      {video.length > 0 &&
        video.slice(0, 1).map((item) => (
          <iframe
            key={item.id}
            width="900"
            height="506"
            // src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
    </div>
  );
}

export default MovieDetail;
