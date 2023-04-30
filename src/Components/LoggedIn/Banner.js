import React, { useState, useEffect } from "react";
import axios from "../../Pages/LoggedIn/axios";
import requests from "../../Pages/LoggedIn/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <header className="w-screen h-screen">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.name}
          className="w-screen h-screen object-cover"
        />
        <div className="absolute top-0 left-0">
          <div className="w-screen h-screen flex flex-col justify-center pl-10">
            <h1 className="text-white text-4xl font-bold">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="text-white text-lg w-2/5">
              {movie?.overview?.length > 150
                ? movie?.overview?.substring(0, 150) + "..."
                : movie?.overview}
            </p>
            <div className="flex gap-5 mt-5">
              <button className="w-20 h-10 bg-white rounded-lg">Play</button>
              <button className="w-32 h-10 bg-neutral-600 text-white rounded-lg">
                More Info
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Banner;
