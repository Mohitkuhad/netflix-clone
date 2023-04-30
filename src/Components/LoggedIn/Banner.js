import React, { useState, useEffect } from "react";
import axios from "../../Pages/LoggedIn/axios";
import requests from "../../Pages/LoggedIn/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  //Fetching data from The Movie Db for the top banner of the page after the user is logged in, This will give us all the images now in line 14 we use Math.random to get a random movie data each time the component is loaded.
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
      <header className="w-screen md:h-screen">
        {/*
            Here we are using the backdrop_path from the data we got from the API to get the image for the banner.
        */}
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.name}
          className="w-screen h-screen object-cover object-center"
        />
        <div className="absolute top-0 left-0">
          <div className="w-screen h-screen flex flex-col md:justify-center mt-28 pl-10">
            <h1 className="text-white text-4xl font-bold">
              {/*
                  Here we are using the title, name and original_name from the data we got from the API to get the title for the banner.
              */}
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/*
                Here we are using the overview from the data we got from the API to get the description for the banner.
            */}
            <p className="text-white text-lg md:w-2/5">
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
