import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointment})` }}
      className="flex justify-center  items-center mb-20 p-5"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-140px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <span className="text-xl text-primary font-bold my-3 block">
          Appointment
        </span>
        <h1 className="text-white text-3xl mb-3">Make an appointment Today</h1>
        <p className="text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="my-5">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
