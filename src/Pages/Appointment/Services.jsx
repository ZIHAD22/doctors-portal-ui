import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:mx-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-2xl text-secondary font-bold text-center">
          {name}
        </h2>
        <p>
          {slots.length ? (
            slots[0]
          ) : (
            <span className="text-red-600">Try again next day</span>
          )}
        </p>
        <p>
          {slots.length
            ? `${slots.length} SPACES AVAILABLE`
            : "NO SPACES AVAILABLE"}
        </p>
        <div className="card-actions justify-center">
          <label
            className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white font-bold"
            htmlFor="appoinment-modal"
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Services;
