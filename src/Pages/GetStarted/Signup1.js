import React from "react";
import { Link } from "react-router-dom";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";

function Signup1() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("user");
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <GetStartedHeader />
        <div className="w-2/4 max-w-[500px] flex flex-col gap-5 items-center p-10">
          <img
            src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679649716/NetflixClone/Get%20Started/GetStartedDevices_jdc9dv.png"
            alt="Netflix Clone Get Started Devices"
            className="w-4/5"
          />
          <p>
            STEP
            <span className="font-bold"> 1</span> OF
            <span className="font-bold"> 3</span>
          </p>
          <h1 className="text-4xl font-bold text-center">
            Finish setting up your account.
          </h1>
          <p className="text-xl text-center w-3/5">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <Link to={`/signup/regform?user=${email}`} className="w-4/5">
            <button className="bg-netflixRed text-white w-full h-20 text-3xl rounded-lg">
              Next
            </button>
          </Link>
        </div>
      </div>
      <SmallFooter />
    </>
  );
}

export default Signup1;
