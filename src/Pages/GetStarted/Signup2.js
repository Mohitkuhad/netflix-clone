import React, { useState, useEffect } from "react";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";
import { Link } from "react-router-dom";
import auth from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup2() {
  const queryParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const email = queryParams.get("user");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(navigate(`/signup`))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <GetStartedHeader />
        <div className="flex flex-col gap-4 w-2/6 p-5">
          <p>
            STEP
            <span className="font-bold"> 1</span> OF
            <span className="font-bold"> 3</span>
          </p>
          <h1 className="text-4xl font-bold text-left">
            Create a password to start your membership
          </h1>
          <p>
            Just a few more steps and you're done!
            <br /> We hate paperwork, too.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-16 bg-transparent border rounded pl-2"
            defaultValue={email}
          />
          <input
            type="password"
            placeholder="Add a password"
            className="w-full h-16 bg-transparent border rounded pl-2"
            onChange={(e) => setPassword(e.target.value)}
          />
            <button
              className="bg-netflixRed text-white w-full h-16 text-3xl rounded-lg"
              onClick={handleClick}
            >
              Next
            </button>
        </div>
      </div>
      <SmallFooter />
    </>
  );
}

export default Signup2;