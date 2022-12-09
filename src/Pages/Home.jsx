import React from "react";
import Acerca from "../components/Acerca";
import Contactanos from "../components/Contactanos";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav/>
      <Landing />
      <Acerca />
      <Contactanos />
    </div>
  );
};

export default Home;
