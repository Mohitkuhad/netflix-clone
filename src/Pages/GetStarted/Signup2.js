import React, { useState } from "react";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup2() {
  const queryParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const email = queryParams.get("user");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = getAuth();

  const handleClick = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
          });
        })
        .then(navigate(`/signup`))
        .then(() => {
          console.log("User Created", auth.currentUser);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode === "auth/email-already-in-use") {
            navigate("/login");
          } else {
            alert(errorMessage);
          }
        });
    });
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <GetStartedHeader />
        <div className="flex flex-col gap-4 md:w-2/6 p-5">
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
            type="text"
            placeholder="Name"
            className="w-full h-16 bg-transparent border rounded pl-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-16 bg-transparent border rounded pl-2"
            vdialue={email}
          />
          <input
            type="password"
            placeholder="Add a password"
            className="w-full h-16 bg-transparent border rounded pl-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-netflixRed text-white h-16 text-3xl rounded-lg w-28 md:w-4/5"
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
