import React from "react";

import CartMovie from "../../components/CartMovie";
import Header from "../../components/Header";
import SlideHomePage from "./SlideHomePage";
const Homepage = () => {
  return (
    <div className="flex flex-col flex-grow  px-5">
      <Header></Header>
      <div className="basis-8/12 2xl:basis-10/12 w-full ">
        <SlideHomePage />

        <CartMovie query="now_playing" title="Now Playing"></CartMovie>
        <CartMovie query="top_rated" title="Top Rated"></CartMovie>
        <CartMovie query="popular" title="Popular"></CartMovie>
      </div>
    </div>
  );
};

export default Homepage;
