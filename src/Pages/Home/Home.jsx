import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Terms from "./Terms";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Hero />
      <Info />
      <Services />
      <Terms />
      <MakeAppointment />
    </div>
  );
};

export default Home;
