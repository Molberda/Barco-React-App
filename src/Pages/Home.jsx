import React, { useEffect } from "react";
import Acerca from "../components/Acerca";
import Contactanos from "../components/Contactanos";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Nav link1="#acerca" name1="Acerca de Nosotros" link2="#contactanos" name2="Contáctanos" link3="/menu" name3="Menú" />
      <Landing />
      <Acerca />
      <Contactanos />
    </div>
  );
};

export default Home;
