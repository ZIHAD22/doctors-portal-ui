import React from "react";

const InfoCard = ({ img, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-xl p-5 mb-5 ${bgClass} text-white`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
