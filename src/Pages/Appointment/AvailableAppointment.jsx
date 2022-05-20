import axios from "../../utility/axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Services from "./Services";
import Modal from "./Modal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [teretment, setTreatment] = useState({});

  useEffect(() => {
    axios.get("services.json").then(({ data: appointmentService }) => {
      setServices(appointmentService);
    });
  }, []);
  return (
    <div className="mb-28">
      <h4 className="text-xl text-secondary text-center text-bold mb-5">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Services
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {Object.keys(teretment).length !== 0 && (
        <Modal teretment={teretment} setTreatment={setTreatment} date={date} />
      )}
    </div>
  );
};

export default AvailableAppointment;
