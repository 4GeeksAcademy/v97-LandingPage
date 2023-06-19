import React from "react";

export const CardList = ({ children }) => {
  return (
    <div className="container">
      <div
        className=" row d-flex flex-row d-grid gap-5 ps-5 mb-10 justify-content-center "
        style={{ marginBottom: "200px" }}
      >
        {children}
      </div>
    </div>
  );
};
