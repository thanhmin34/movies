import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "./config";
import useDebounce from "./Hooks/useDebounce";

const SearchMovies = ({ mt10 }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca`
  );
  const filterDebounce = useDebounce(filter, 500);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const inputRef = useRef();
  const hanldeClick = () => {
    if (inputRef.current.value !== "") {
      navigate(`/movies/`);
    }
  };
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=92f81e121c32d0b9ad19e4e7851187ca&query=${filterDebounce}`
      );
    }
  }, [filterDebounce]);
  const searchTitle = data?.results || [];
  return (
    <div
      className={`flex items-center  ${mt10}  mx-6 rounded-2xl  border-all relative search-block 2xl:w-[200px] xl:w-[150px]`}
    >
      <input
        type="text"
        className="input-btn text-out-line ml-1 px-1 w-full rounded-lg text-base text-[#ccc] "
        placeholder="Search"
        ref={inputRef}
        onChange={(e) => setFilter(e.target.value)}
        // onChange={hanldeFilter}
      />
      <span className="p-1 cursor-pointer" onClick={hanldeClick}>
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
            className="text-[#3a3b43]"
          />
        </svg>
      </span>
      <ul className="absolute top-[35px] left-0 right-0  bg-[#27282e] z-10 text-white search-btn   overflow-y-auto overflow-x-hidden  h-[200px] scrollbar overflow-hidden opacity-0">
        {loading && (
          <div className="fixed mt-5 ml-[70px] w-8 h-8 rounded-full border-2 border-basic border-l-transparent animate-spin"></div>
        )}
        {searchTitle.length > 0 &&
          searchTitle.map((item) => (
            <li
              // onClick={() => navigate(`/movie/${item.id}`)}
              key={item.id}
              className="text-overflow-1 text-md cursor-pointer border-b-[#ccc] py-1 px-2"
            >
              <Link to={`/movie/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchMovies;
