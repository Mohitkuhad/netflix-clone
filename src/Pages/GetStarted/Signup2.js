import React from "react";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";
import { Link } from "react-router-dom";

function Signup2() {
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
            className="w-full h-16 bg-transparent border rounded"
          />
          <input
            type="password"
            placeholder="Add a password"
            className="w-full h-16 bg-transparent border rounded"
          />
          <Link to="/signup">
            <button className="bg-netflixRed text-white w-full h-16 text-3xl rounded-lg">
              Next
            </button>
          </Link>
        </div>
      </div>
      <SmallFooter />
    </>
  );
}

export default Signup2;
