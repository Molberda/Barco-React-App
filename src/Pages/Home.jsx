import React from "react";
import Acerca from "../components/Acerca";
import Contactanos from "../components/Contactanos";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav link1="#acerca" name1="Acerca de Nosotros" link2="#contactanos" name2="Contáctanos" />
      <Landing />
      <Acerca />
      <Contactanos />
    </div>
  );
};

export default Home;
