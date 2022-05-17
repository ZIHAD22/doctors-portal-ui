import React from "react";
import treatment from "../../assets/images/treatment.png";

const Terms = () => {
  return (
    <div class="card lg:card-side mb-8 lg:w-2/3 lg:mx-auto">
      <img className="w-[460px]" src={treatment} alt="Album" />

      <div class="card-body my-auto lg:mx-7">
        <h2 class="card-title text-4xl text-center">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
      </div>
    </div>
  );
};

export default Terms;
