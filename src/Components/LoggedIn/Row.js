import React, { useState, useEffect } from "react";
import requests from "../../Pages/LoggedIn/Requests";
import axios from "../../Pages/LoggedIn/axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovie] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
    console.log(typeof(movies));
  }, [fetchUrl]);


  return (
    <div className="mt-12">
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <div className="flex gap-5 overflow-x-scroll scrollbar-hide no-scrollbar py-5">
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              src={`${base_url}${
                movie.backdrop_path
              }`}
              alt={movie.name}
              className="w-48 rounded hover:scale-110 duration-300"
            />
          ))}
      </div>
    </div>
  );
}

export default Row;
