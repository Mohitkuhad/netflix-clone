import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen p-10 flex justify-between items-center">
      <img
        src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
        alt="Netflix Clone Header Logo"
        className="w-32"
      />
      <div className="flex gap-5 items-center">
        <select className="w-32 h-9 bg-black text-white border border-white rounded-lg">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <Link to="/login">
          <button className="w-20 h-9 rounded-lg bg-netflixRed text-white">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
