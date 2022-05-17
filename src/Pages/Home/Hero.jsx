import React from "react";
import chair from "../../assets/images/chair.png";
import heroBg from "../../assets/images/bg.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage: `url('${heroBg}')`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className=" max-w-sm lg:max-w-xl rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
