import React from "react";
import { IconContext } from "react-icons";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";


// Footer for the browse page.
function UserFooter() {
  return (
    <div className="w-screen bg-black px-44 py-32">
      <div className="flex gap-5">
        <IconContext.Provider
          value={{
            className: "text-white text-3xl",
          }}
        >
          <RiFacebookFill />
          <FaInstagram />
          <BsTwitter />
          <AiFillYoutube />
        </IconContext.Provider>
      </div>
      <div className="flex mt-10">
        <div className="w-1/4 flex flex-col gap-3 text-white">
          <p className="cursor-pointer">Audio Description</p>
          <p className="cursor-pointer">Investor Relation</p>
          <p className="cursor-pointer">Legal Notices</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3 text-white">
          <p className="cursor-pointer">Help Center</p>
          <p className="cursor-pointer">Jobs</p>
          <p className="cursor-pointer">Cookie Preferences</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3 text-white">
          <p className="cursor-pointer">Gift Cards</p>
          <p className="cursor-pointer">Terms of Use</p>
          <p className="cursor-pointer">Corporate Information</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3 text-white">
          <p className="cursor-pointer">Media Center</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
      </div>
        <button className="text-white border px-5 py-2 my-10">
            Service Code
        </button>
        <p className="text-sm text-neutral-400">
            © 1997-2023 Netflix, Inc.
        </p>
    </div>
  );
}

export default UserFooter;
