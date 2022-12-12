import React, { useEffect } from "react";
import Acerca from "../components/Acerca";
import Contactanos from "../components/Contactanos";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Burger from "../ui/Burger";

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Burger/>
      <Nav name1="Acerca de Nosotros" link1="#acerca" name2="Contáctanos" link2="#contactanos" name3="Menú" link3="/menu"/>
      <Landing />
      <Acerca />
      <Contactanos />
      <Footer name1="Acerca de Nosotros" link1="#acerca"  name2="Contáctanos" link2="#contactanos" name3="Menú" link3="/menu" />
    </div>
  );
};

export default Home;
