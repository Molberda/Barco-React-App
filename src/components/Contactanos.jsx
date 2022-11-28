import React from "react";

const Contactanos = () => {
  return (
    <section id="contactanos">
      <div class="row ubicacion__row">
        <div class="container ubicacion__container">
          <div class="contactanos__organizer">
            <h1 class="contactanos__title title">Contáctanos</h1>
            <p class="contactanos__text text">
              Estamos ubicados en la calle 99 # 9a-29 <br /> Abiertos de Lunes a
              Sabado 1:00pm-11:00pm <br />
              Síguenos en Instagram{" "}
              <a
                href="https://www.instagram.com/barco_pola/"
                target="_blank"
                class="text insta__link"
              >
                @barco_pola
              </a>{" "}
              <br />
              No dudes en contactarnos!! 👍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
