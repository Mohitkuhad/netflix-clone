import React from "react";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      <GetStartedHeader />
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center md:w-2/5 gap-5">
          <img
            src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682607076/NetflixClone/lock_lx7rev.png"
            width="45"
          />
          <p>
            STEP
            <span className="font-bold"> 3</span> OF
            <span className="font-bold"> 3</span>
          </p>
          <h1 className="text-3xl font-bold">Choose how to pay</h1>
          <p className="w-2/4">
            This is just a Netflix clone project you can just click "Pay Now"
            and proceed.
          </p>
          <Link to="/browse">
            <button className="px-5 md:w-2/3 h-10 bg-netflixRed text-white text-xl rounded">
              Pay Now
            </button>
          </Link>
        </div>
      </div>
      <SmallFooter />
    </div>
  );
}

export default Payment;
