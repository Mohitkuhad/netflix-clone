import React from "react";
import UserHeader from "../../Components/LoggedIn/UserHeader";

function Browse() {
  return (
    <div>
      <UserHeader />
      <div className="w-screen h-screen -pt-28 relative">
        <video
          src="https://res.cloudinary.com/dlqpxszzo/video/upload/v1682788384/pexels-gokhan-ergin-eryildir-4138365-1920x1080-25fps_i9qeob.mp4"
          
          loop
        />
        <div className="absolute w-screen h-screen top-0 left-0 flex flex-col justify-center pl-10">
          <h1 className="text-white text-4xl font-bold">
            Not A <br />
            Movie
          </h1>
          <p className="text-white text-lg w-2/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptate quod
            voluptatibus quas doloribus quidem voluptatem. Quisquam voluptatum,
            quibusdam, quia, quos voluptates voluptate quod voluptatibus quas
            doloribus quidem voluptatem.
          </p>
          <div className="flex gap-5 mt-5">
            <button className="w-20 h-10 bg-white rounded-lg">
              Play
            </button>
            <button className="w-32 h-10 bg-neutral-600 text-white rounded-lg">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
