import React, { useState, useEffect } from "react";
import UserHeader from "../../Components/LoggedIn/UserHeader";
import auth from "../../Firebase";
import axios from "axios";
import UserFooter from "../../Components/LoggedIn/UserFooter";

function Browse() {
  const [state, setState] = useState({
    countryName: "",
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,
          countryName: data.country_name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  useEffect(() => {
    getGeoInfo();
  }, []);

  const thumbnail1 = () => {
    return (
      <img
        src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682802829/NetflixClone/Shows/pexels-pixabay-461940_1_flhuan.jpg"
        className="w-48 rounded"
      />
    );
  };

  const thumbnail2 = () => {
    return (
      <img
        src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682802828/NetflixClone/Shows/pexels-simon-berger-1323550_1_wylxf7.jpg"
        className="w-48 rounded"
      />
    );
  };

  return (
    <div className="bg-black">
      <UserHeader />
      <div className="w-screen h-screen -pt-28 relative">
        <video
          src="https://res.cloudinary.com/dlqpxszzo/video/upload/v1682788384/pexels-gokhan-ergin-eryildir-4138365-1920x1080-25fps_i9qeob.mp4"
          loop
          muted
          className="w-screen h-screen object-cover"
        />
        <div className="absolute top-0">
          <div className="w-screen h-screen flex flex-col justify-center pl-10">
            <h1 className="text-white text-4xl font-bold">
              Not A <br />
              Movie
            </h1>
            <p className="text-white text-lg w-2/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptate quod
              voluptatibus quas doloribus quidem voluptatem. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptate quod
              voluptatibus quas doloribus quidem voluptatem.
            </p>
            <div className="flex gap-5 mt-5">
              <button className="w-20 h-10 bg-white rounded-lg">Play</button>
              <button className="w-32 h-10 bg-neutral-600 text-white rounded-lg">
                More Info
              </button>
            </div>
          </div>
          <div className="pl-10 bg-black">
            <h1 className="text-white text-2xl font-bold">
              Continue Watching for {auth.currentUser.displayName} &gt;
            </h1>
            <div className="py-5 flex gap-5">
              {thumbnail1()}
              {thumbnail2()}
            </div>
            <h1 className="text-white text-2xl font-bold mt-10">
              New Releases
            </h1>
            <div className="py-5 flex gap-5 overflow-auto">
              {thumbnail1()}
              {thumbnail2()}

              {thumbnail1()}
              {thumbnail2()}

              {thumbnail1()}
              {thumbnail2()}

              {thumbnail1()}
              {thumbnail2()}
            </div>
            <h1 className="text-white text-2xl font-bold mt-10">
              Top 10 Movies in {state.countryName}
            </h1>
            <div className="py-5 flex gap-5 overflow-auto">
              {thumbnail1()}
              {thumbnail2()}

              {thumbnail1()}
              {thumbnail2()}

              {thumbnail1()}
              {thumbnail2()}

              {thumbnail1()}
              {thumbnail2()}
            </div>
          </div>
      <UserFooter />
        </div>
      </div>
    </div>
  );
}

export default Browse;
