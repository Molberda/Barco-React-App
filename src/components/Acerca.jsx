import React from "react";
import acercaImg from "../assets/barco_noche.jpeg";
import Scroll from "../ui/Scroll";

const Acerca = () => {
  return (
    <section id="acerca">
      <div className="container">
        <div className="row acerca__row">
          <figure className="acerca__img--wrapper">
            <img src={acercaImg} alt="" className="acerca__img" />
          </figure>
          <div className="organizer acerca__organizer">
            <h1 className="title acerca__title">¿QUIENES SOMOS?</h1>
            <h2 className="text acerca__text">
              Bar.Co es un bar que se caracteriza por ser la única empresa en
              apostarle a ser low cost en su segmento, a diferencia de las
              tiendas de barrio tiene un ambiente moderno y aspiracional
              conservado los mejores precios.
            </h2>
          </div>
          <Scroll link="#contactanos" />
        </div>
      </div>
    </section>
  );
};

export default Acerca;
