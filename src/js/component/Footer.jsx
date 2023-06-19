import React from "react";

const ComponentStyle = {
  background: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

export const Footer = () => {
  return (
    <div className="p-2 d-flex align-items-end" style={ComponentStyle}>
      Copyright® Your Website 2023
    </div>
  );
};
