import React from "react";
import auth from "../../Firebase";
import { IoMdArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function UserHeader() {
  const handleHover = () => {
    document.getElementById("dropdown").classList.remove("hidden");
  };
  const signOut = () => {
    auth.signOut().then(() => {
      window.location.reload();
    });
  };
  return (
    <div className="w-screen h-28 px-3 md:px-12 py-5 bg-gradient-to-b from-black to-transparent absolute top-0 flex justify-between items-center z-50">
      <div className="flex gap-10">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
            alt="Netflix Clone Header Logo"
            className="w-32"
          />
        </Link>
        <p className="md:block hidden text-white text-lg cursor-pointer font-bold">Home</p>
        <p className="md:block hidden text-white text-lg cursor-pointer">TV Shows</p>
        <p className="md:block hidden text-white text-lg cursor-pointer">Movies</p>
        <p className="md:block hidden text-white text-lg cursor-pointer">New & Popular</p>
      </div>
      <div className="flex gap-2 md:gap-5 items-center">
        <p className="text-white font-bold">{auth.currentUser.displayName}</p>
        <img
          src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682786968/NetflixClone/avatar1_beq6zg.png"
          alt="Avatar"
          className="w-9 rounded-lg"
        />
        <div className="relative">
          <IconContext.Provider value={{ className: "text-white text-2xl" }}>
            <IoMdArrowDropdown
              onMouseOver={handleHover}
              onClick={() => {
                document.getElementById("dropdown").classList.add("hidden");
              }}
            />
          </IconContext.Provider>
          <div
            id="dropdown"
            className="hidden absolute top-10 right-0 bg-black rounded-lg py-2 px-5"
          >
            <p
              className="text-white text-lg cursor-pointer whitespace-nowrap"
              onClick={signOut}
            >
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
