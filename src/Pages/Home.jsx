import React from "react";
import Acerca from "../components/Acerca";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <section id="landing">
      <div className="container">
        <Landing />
        <Acerca />
      </div>
    </section>
  );
};

export default Home;
