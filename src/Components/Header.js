import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase";

function Header() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  const handleClick = () => {
    if (user) {
      auth.signOut();
    } else {
      navigate("/login");
    }
  };

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
        <button
          className="w-20 h-9 rounded-lg bg-netflixRed text-white"
          onClick={handleClick}
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default Header;
