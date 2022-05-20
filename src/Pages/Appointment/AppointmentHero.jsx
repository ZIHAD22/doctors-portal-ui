import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentHero = ({ date, setDate }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl"
          alt="chair"
        />
        <div className="mx-auto lg:pr-20">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
