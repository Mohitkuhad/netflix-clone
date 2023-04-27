import React from "react";

function SmallFooter() {
  return (
    <div className="w-screen flex flex-col justify-center items-center gap-5 pb-5 text-gray-500">
      <div className="w-3/4">
        <p>
          Questions? Call{" "}
          <a href="tel:0008009191694" className="underline">
            000-800-919-1694
          </a>
        </p>
      </div>
      <div className="w-3/4 flex justify-between mt-5">
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">FAQ</p>
          <p className="underline">Privacy</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">Help Center</p>
          <p className="underline">Cookie Preferences</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">Netflix Shop</p>
          <p className="underline">Corporate Information</p>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <p className="underline">Terms of Use</p>
        </div>
      </div>
      <div className="w-3/4">
        <select className="w-32 h-12 border border-black">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>
    </div>
  );
}

export default SmallFooter;
