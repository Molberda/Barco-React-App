import React from "react";
import Acerca from "../components/Acerca";
import Contactanos from "../components/Contactanos";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Acerca />
      <Contactanos />
    </div>
  );
};

export default Home;
