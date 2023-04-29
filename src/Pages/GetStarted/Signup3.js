import React from "react";
import { Link } from "react-router-dom";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";
import auth from "../../Firebase";

function Signup3() {
  console.log(auth.currentUser);
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <GetStartedHeader />
        <div className="w-2/4 max-w-[500px] flex flex-col gap-5 items-center p-10">
          <img
            src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679733907/NetflixClone/Get%20Started/Checkmark_wnyfdw.png"
            alt="Netflix Clone Get Started Devices"
            className="w-14"
          />
          <p>
            STEP
            <span className="font-bold"> 2</span> OF
            <span className="font-bold"> 3</span>
          </p>
          <h1 className="text-4xl font-bold text-center">Choose your plan.</h1>
          <div className="flex gap-3 items-center">
            <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682547170/NetflixClone/Get%20Started/tick_leexrd.png" />
            <p>No commitments, cancel anytime.</p>
          </div>

          <div className="flex gap-3 items-center">
            <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682547170/NetflixClone/Get%20Started/tick_leexrd.png" />
            <p>No commitments, cancel anytime.</p>
          </div>

          <div className="flex gap-3 items-center">
            <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682547170/NetflixClone/Get%20Started/tick_leexrd.png" />
            <p>No ads and no extra fees. Ever.</p>
          </div>
          <Link to="/signup/planform" className="w-4/5">
            <button className="bg-netflixRed text-white w-full h-16 mt-10 text-3xl rounded-lg">
              Next
            </button>
          </Link>
        </div>
      </div>
      <SmallFooter />
    </>
  );
}

export default Signup3;
