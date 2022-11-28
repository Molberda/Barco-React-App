import React from "react";
import acercaImg from "../assets/barco_noche.jpeg";

const Acerca = () => {
  return (
    <section id="acerca">
      <div className="container">
        <div className="row">
          <figure className="acerca__img--wrapper">
            <img src={acercaImg} alt="" className="acerca__img" />
          </figure>
          <div className="organizer">
            <h1 className="title">¿QUIENES SOMOS?</h1>
            <h2 className="text"></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
