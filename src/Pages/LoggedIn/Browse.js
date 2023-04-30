import React, { useState, useEffect } from "react";
import UserHeader from "../../Components/LoggedIn/UserHeader";
import auth from "../../Firebase";
import axios from "axios";
import UserFooter from "../../Components/LoggedIn/UserFooter";
import Row from "../../Components/LoggedIn/Row";
import requests from "./Requests";
import Banner from "../../Components/LoggedIn/Banner";

function Browse() {
  return (
    <div className="bg-black">
      <UserHeader />
      <div className="w-screen h-screen -pt-28 relative">
        <Banner />
        <div className="bg-black pl-10 pt-5">
          <Row title="Trending" fetchUrl={requests.fetchTrending} />

          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

          <Row title="Top Action" fetchUrl={requests.fetchActionMovies} />

          <Row title="Top Comedy" fetchUrl={requests.fetchComedyMovies} />

          <Row title="Top Horror" fetchUrl={requests.fetchHorrorMovies} />

          <Row title="Top Romance" fetchUrl={requests.fetchRomanceMovies} />

          <Row
            title="Top Documentaries"
            fetchUrl={requests.fetchDocumentaries}
          />

          <Row title="Top TV Shows" fetchUrl={requests.fetchPopularTV} />
        </div>
      </div>
    </div>
  );
}

export default Browse;
