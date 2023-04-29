import React from "react";
import auth from "../../Firebase";

function UserHeader() {
  return (
    <div className="w-screen h-28 px-12 py-5 bg-gradient-to-b from-black to-transparent absolute top-0 flex justify-between items-center z-50">
      <div className="">
        <img
          src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
          alt="Netflix Clone Header Logo"
          className="w-32"
        />
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-white font-bold">
        {auth.currentUser.displayName}
        </p>
        <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682786968/NetflixClone/avatar1_beq6zg.png"
            alt="Avatar"
            className="w-9 rounded-lg"
        />
      </div>
    </div>
  );
}

export default UserHeader;
