import React from "react";
import landingImg from "../assets/Barco-cheers.png";
import Scroll from "../ui/Scroll";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container landing__container">
        <div className="row">
          <div className="organizer">
            <h1 className="title">BAR.CO Pola</h1>
            <h2 className="landing__text text">
              EL MEJOR LUGAR PARA IR A PASAR UN BUEN RATO CON LA GENTE QUE MÁS
              QUIERES.
            </h2>
            <div className="typing__wrapper">
              <h2 className="landing__text static__text">TENEMOS</h2>
              <ul className="dynamic__texts">
                <li>
                  <span className="typing__text">LA MEJOR POLA</span>
                </li>
                <li>
                  <span className="typing__text">LA MEJOR MÚSICA</span>
                </li>
                <li>
                  <span className="typing__text">LA MEJOR COMPAÑÍA</span>
                </li>
                <li>
                  <span className="typing__text">EL MEJOR PRECIO</span>
                </li>
              </ul>
            </div>
          </div>
          <figure className="landing__img--wrapper">
            <img src={landingImg} alt="" className="landing__img" />
          </figure>
          <Scroll link="#acerca" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
