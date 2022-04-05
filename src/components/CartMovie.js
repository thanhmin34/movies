import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, breakpoints } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import CartItems from "../pages/MoviePage/CartItems";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const CartMovie = ({ title, query }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${query}?api_key=92f81e121c32d0b9ad19e4e7851187ca`,
    fetcher
  );
  if (!data?.results) return null;
  const movies = data.results;
  const loading = !data && !error;
  // console.log(movies);
  return (
    <div className="xl:container-page mt-5 2xl:container-page-xl md:w-[800px] sm:w-[600px] ">
      <div className="flex flex-row items-center">
        <h2 className="text-white text-2xl font-bold ">{title}</h2>
        <div className="flex flex-row items-center text-white ml-auto">
          <span className="w-[24px] h-[24px] rounded-[50%] bg-slate-700 flex items-center justify-center text-xs mr-2 relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                className="relative left-[-1px] "
              />
            </svg>
          </span>

          <span className="w-[24px] h-[24px] rounded-[50%] bg-slate-700 flex items-center justify-center text-xs cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                className="relative rigth-[-1px] "
              />
            </svg>
          </span>
        </div>
      </div>
      {loading && (
        <div className="w-[50px] h-[50px] rounded-full mx-auto border-4 border-basic border-l-transparent animate-spin"></div>
      )}
      <div className={`movie-list text-white my-7 }`}>
        <Swiper
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            // when window width is >= 640px
            350: {
              width: 350,
              slidesPerView: 2,
            },
            640: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            799: {
              width: 799,
              slidesPerView: 4,
            },
            900: {
              width: 900,
              slidesPerView: 4,
            },
            1000: {
              width: 1000,
              slidesPerView: 5,
            },
          }}
          width="1001"
          navigation
          spaceBetween={10}
          slidesPerView={4}

          // slidesPerView={4}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <CartItems value={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

// https://api.themoviedb.org/3/movie/now_playing?api_key=92f81e121c32d0b9ad19e4e7851187ca
export default CartMovie;
