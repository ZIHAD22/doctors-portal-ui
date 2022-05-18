import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white font-bold">
      {children}
    </button>
  );
};

export default PrimaryButton;
