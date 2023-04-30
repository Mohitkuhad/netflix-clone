import React from "react";

// Footer for the home page.
function Footer() {
  return (
    <div className="w-screen md:h-[50vh] flex flex-col justify-center items-center gap-10 text-lightgrey">
      <div className="w-3/4">
        <p>
          Questions? Call{" "}
          <a href="tel:0008009191694" className="underline">
            000-800-919-1694
          </a>
        </p>
      </div>
      <div className="w-3/4 flex justify-between md:flex-row flex-col mt-5">
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">FAQ</p>
          <p className="underline">Investor Relations</p>
          <p className="underline">Privacy</p>
          <p className="underline">Speed Test</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">Help Center</p>
          <p className="underline">Jobs</p>
          <p className="underline">Cookie Preferences</p>
          <p className="underline">Legal Notices</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">Account</p>
          <p className="underline">Ways to Watch</p>
          <p className="underline">Corporate Information</p>
          <p className="underline">Only on Netflix</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">Media Centre</p>
          <p className="underline">Terms of Use</p>
          <p className="underline">Contact Us</p>
        </div>
      </div>
      <div className="w-3/4">
        <select className="w-32 h-9 bg-black text-white border border-white rounded-lg">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <p className="text-lighgrey mt-5">Netflix India</p>
      </div>
    </div>
  );
}

export default Footer;
