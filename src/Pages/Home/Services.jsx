import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      title: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="py-24">
      <div className="text-center">
        <span className="text-xl text-secondary font-bold block py-4">
          OUR SERVICES
        </span>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 my-8">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
