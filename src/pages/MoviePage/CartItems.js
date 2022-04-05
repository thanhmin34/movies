import React from "react";
import { useNavigate } from "react-router-dom";

function CartItems({ value }) {
  const navigate = useNavigate();
  return (
    <div
      className="cartItem bg-slate-800 rounded-lg p-2 "
      onClick={() => navigate(`/movie/${value.id}`)}
    >
      <img
        className="w-full h-[175px] object-cover rounded-lg  "
        src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`}
      />
      <div className="body min-h-[60px] h-[60px] flex flex-1 flex-col my-2 ">
        <h2 className="flex-1 text-[13px] text-overflow-1 mb-2 text-center">
          {value.title}
        </h2>
        <div className="flex items-center justify-between text-[10px] opacity-60">
          <span>{new Date(value.release_date).getFullYear()}</span>
          <span>{value.vote_average}</span>
        </div>
      </div>
      <button
        onClick={() => navigate(`/movie/${value.id}`)}
        className="flex items-center justify-center w-full py-2 bg-primary rounded-lg mb-2 "
      >
        Watch Now
      </button>
    </div>
  );
}

export default CartItems;
