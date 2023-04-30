import React from "react";
import { Link } from "react-router-dom";


// Header for the get started page.
function GetStartedHeader() {
  return (
    <div className="w-screen flex justify-between p-5 md:p-10 absolute top-0">
      <Link to="/">
      <img
        src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
        alt="Netflix Clone Header Logo"
        className="w-20 md:w-32"
      />
      </Link>
      <Link to="/login">
        <p className="text-black text-lg md:text-xl font-semibold hover:underline cursor-pointer">
          Sign in
        </p>
      </Link>
    </div>
  );
}

export default GetStartedHeader;
