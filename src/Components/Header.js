import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase";

function Header() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  //This component updated the const user declared in useState every time the user is logged in.
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  //This function checks if the user is signed in or not if the user is true which means user is signed in, and when the user clicks the button the user is siggned not and if user is not it will navigate the user to the login page.
  const handleClick = () => {
    if (user) {
      auth.signOut();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-screen p-5 md:p-10 flex justify-between items-center">
      <img
        src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
        alt="Netflix Clone Header Logo"
        className="w-20 md:w-32"
      />
      <div className="flex gap-2 md:gap-5 items-center">
        <select className="md:w-32 h-9 bg-black text-white border border-white rounded-lg">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        {/*This button changes it's text on based of if the user is signed or not  by using the 'user' constant declared in useState*/}
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
