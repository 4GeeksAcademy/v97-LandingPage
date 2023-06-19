import React from "react";

import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

import { Footer } from "./Footer.jsx";
import { CardList } from "./CardList.jsx";
import { Card } from "./Card.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardList>
        <Card />
        <Card />
        <Card />
        

        <Card />
      </CardList>
      <Footer />
    </>
  );
};

//create your first component
export default Home;

// ReactDOM.render(<navbar />, document.querySelector("#myDiv"));
