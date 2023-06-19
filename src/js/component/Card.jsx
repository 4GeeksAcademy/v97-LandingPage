import React from "react";

const styleCard = {
  width: "20rem",
};

export const Card = () => {
  return (
   
    <div className="col-lg col-md-4 col-sm-12 justify-content-center card text-center" style={styleCard}>
      <img
        src="https://placeholder.com/500x325"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
   
  );
};
