import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../../components/config";
import "swiper/scss";
import "swiper/scss/autoplay";
const SlideHomePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=92f81e121c32d0b9ad19e4e7851187ca`,
    fetcher
  );
  const loading = !data && !error;
  const movies = data?.results || [];
  return (
    <section className="h-[350px] 2xl:h-[420px] 2xl:container-page-xl container-page banner ">
      {loading && (
        <div className="border-4 border-basic w-16 h-16 rounded-full border-l-transparent animate-spin fixed ml-[400px] mt-20 z-10"></div>
      )}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView={"auto"}

        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItems item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItems({ item }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg bg-white pt-[42%] relative">
      {/* <div className="overlay absolute top-0 left-0 right-0 bg-gradient-to-t  rounded-lg from-[rgba(0,0,0,0.62)] to-[rgba(0,0,0,0.62)]"></div> */}
      <div className="absolute inset-0 ">
        <img
          className="w-full h-full object-cover rounded-lg opacity-75 "
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="content absolute left-5 bottom-0 text-white">
        <h3 className="text-3xl font-bold mb-5">{item.title}</h3>
        <div className="flex flex-row items-center mb-8  ">
          <span className="border border-wlite py-2 px-4 mr-2 text-center rounded-lg">
            Actions
          </span>
          <span className="border border-wlite py-2 px-4 mr-2 text-center rounded-lg">
            Adventure
          </span>
          <span className="border border-wlite py-2 px-4 mr-2 text-center rounded-lg">
            Drama
          </span>
        </div>
        <button
          onClick={() => navigate(`/movie/${item.id}`)}
          className="mb-10 py-2 px-12 bg-primary text-center rounded-lg "
        >
          Watch
        </button>
      </div>
    </div>
  );
}

export default SlideHomePage;
