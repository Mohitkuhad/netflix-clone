import React from "react";

function HomeCard({ imgLink, h1, h2 }) {
  return (
    <div className="w-[40vw] h-[35vw] flex flex-col justify-center items-center bg-gradient-to-br from-[#0b143b] to-[#400d1f] rounded-xl">
      <img src={imgLink} className="w-3/4" />
      <div className="w-3/4">
        <h1 className="text-3xl font-bold text-white pb-2">{h1}</h1>
        <h2 className="text-sm text-white">{h2}</h2>
      </div>
    </div>
  );
}

export default HomeCard;
