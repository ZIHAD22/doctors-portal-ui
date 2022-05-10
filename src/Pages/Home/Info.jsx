import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const oneAndThree = "bg-gradient-to-r from-secondary to-primary";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 mx-5 mb-5 ">
      <InfoCard img={clock} bgClass={oneAndThree} />
      <InfoCard img={clock} bgClass="bg-accent" />
      <InfoCard img={clock} bgClass={oneAndThree} />
    </div>
  );
};

export default Info;
