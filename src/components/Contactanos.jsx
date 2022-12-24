import React from "react";
import Map from "../ui/Map";

const Contactanos = () => {
  return (
    <section id="contactanos">
      <div className="container ubicacion__container">
        <div className="row ubicacion__row">
          <div className="contactanos__organizer">
            <h1 className="contactanos__title title">Contáctanos</h1>
            <p className="contactanos__text text">
              Estamos ubicados en la calle 99 # 9a-29 <br /> Abiertos de Lunes a
              Sábado 1:00pm-11:00pm <br />
              Síguenos en Instagram{" "}
              <a
                href="https://www.instagram.com/barco_pola/"
                target="_blank"
                rel="noreferrer"
                className="text insta__link"
              >
                @Barco_Pola
              </a>{" "}
              <br />
              No dudes en contactarnos!! 👍
            </p>
          </div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
