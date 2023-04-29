import React from "react";
import { Link } from "react-router-dom";

function GetStartedHeader() {
  return (
    <div className="w-screen flex justify-between p-10 absolute top-0">
      <Link to="/">

      <img
        src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
        alt="Netflix Clone Header Logo"
        className="w-32"
      />
      </Link>
      <Link to="/login">
        <p className="text-black text-xl font-semibold hover:underline cursor-pointer">
          Sign in
        </p>
      </Link>
    </div>
  );
}

export default GetStartedHeader;
