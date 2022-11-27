import React from "react";
import landingImg from '../assets/Barco-cheers.png'

const Landing = () => {
  return (
    <div className="row">
      <div className="organizer">
        <h1 className="title">BAR.CO Pola</h1>
        <h2 className="landing__text text">
          EL MEJOR LUGAR PARA IR A PASAR UN BUEN RATO CON LA GENTE QUE MÁS
          QUIERES.
        </h2>
        <div class="typing__wrapper">
          <h2 class="landing__text static__text">TENEMOS</h2>
          <ul class="dynamic__texts">
            <li>
              <span class="typing__text">LA MEJOR POLA</span>
            </li>
            <li>
              <span class="typing__text">LA MEJOR MÚSICA</span>
            </li>
            <li>
              <span class="typing__text">LA MEJOR COMPAÑÍA</span>
            </li>
            <li>
              <span class="typing__text">EL MEJOR PRECIO</span>
            </li>
          </ul>
        </div>
      </div>
      <figure className="landing__img--wrapper">
        <img src= alt="" className="landing__img" />
      </figure>
    </div>
  );
};

export default Landing;
