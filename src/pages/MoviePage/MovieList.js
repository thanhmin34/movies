import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../components/config";
import useDebounce from "../../components/Hooks/useDebounce";
import ReactPaginate from "react-paginate";
// const pageCount = 5;
const itemsPerPage = 20;
const tabs = ["Movies", "Series Tv"];
const MovieList = () => {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [nextPage, setNextPage] = useState(1);

  const [filter, setFilter] = useState("");
  const [block, setBlock] = useState(true);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 700);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  const movies = data?.results || [];
  const hanldeClick = (query) => {
    setUrl(
      `https://api.themoviedb.org/3/${query}?api_key=92f81e121c32d0b9ad19e4e7851187ca`
    );
  };
  useEffect(() => {
    if (nextPage <= 0) {
      setNextPage(1);
    }
    if (nextPage > 150) setNextPage(150);
    if (filterDebounce) {
      setBlock(false);
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=92f81e121c32d0b9ad19e4e7851187ca&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  useEffect(() => {
    if (!data || !data.total_pages) return null;
    // const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(data.total_pages / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_pages;
    setNextPage(event.selected + 1);
    setItemOffset(newOffset);
  };

  // const { page, total_pages } = data;

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-5">
        {block && (
          <div className="flex flex-row gap-x-5">
            <span
              className="text-active cursor-pointer"
              onClick={() => hanldeClick("movie/popular")}
            >
              Movies
            </span>
            <span
              className="cursor-pointer"
              onClick={() => hanldeClick("tv/airing_today")}
            >
              Series Tv
            </span>
            <span onClick={() => hanldeClick("movie/upcoming")}>Up Coming</span>
          </div>
        )}
        {!block && (
          <div className="font-blod text-2xl ">{`Search result for ${filter}`}</div>
        )}
        {/* <SearchMovies hanldeFilter={hanldeFilter} /> */}
        <div
          className={`flex items-center justify-center  px-2 rounded-2xl  border-all`}
        >
          <input
            type="text"
            className=" text-out-line ml-1 py-1 w-[140px] max-w-[140px] rounded-lg text-base text-[#ccc]"
            placeholder="Search"
            onChange={(e) => setFilter(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
              className="text-[#3a3b43]  px-3 cursor-pointer"
            />
          </svg>
        </div>
      </div>
      {/* {block && (
        <div className="flex flex-row gap-x-3 mb-3">
          <span className=" py-[4px] bg-[#27282e] rounded-lg px-4 min-w-[70px] text-center">
            Action
          </span>
          <span className=" py-[4px] bg-[#27282e] rounded-lg px-4 min-w-[70px] text-center">
            Anime
          </span>
          <span className=" py-[4px] bg-[#27282e] rounded-lg px-4 min-w-[70px] text-center">
            tv
          </span>
        </div>
      )} */}
      {loading && (
        <div className="w-[50px] h-[50px] rounded-full border-4 border-basic border-t-transparent mx-auto animate-spin"></div>
      )}

      <div className="grid grid-cols-6 gap-5 mt-2">
        {movies.length > 0 &&
          movies.map((item) => (
            <div
              onClick={() => navigate(`/movie/${item.id}`)}
              key={item.id}
              className="rounded-lg bg-[#27282e] cursor-pointer"
            >
              <div className="relative pt-[142%] ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className="w-full h-full object-cover rounded-lg absolute top-0 left-0 right-0 "
                  alt=""
                />
              </div>
              <h3 className="text-center text-md text-overflow-1 my-2 px-2 ">
                {item.title}
              </h3>
            </div>
          ))}
      </div>
      <div className="my-7 flex flex-row items-center justify-center text-white gap-x-2 select-none">
        <div className=" mt-10">
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

export default MovieList;
