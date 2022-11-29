import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row__column">
        <a href="#landing" className="logo__link">
          <figure className="footer__logo--wrapper">
            <img src="" alt="" className="footer__logo" />
          </figure>
        </a>
        <div className="footer__organizer">
          <ul className="footer__link--list">
            <li className="footer__list--item">
              <a href="#acerca" className="footer__link">
                Acerca de Nosotros
              </a>
              <div className="footer__link-hover-effect"></div>
            </li>
            <li className="footer__list--item">
              <a href="#contactanos" className="footer__link">
                Contáctanos
              </a>
              <div className="footer__link-hover-effect"></div>
            </li>
            <li className="footer__list--item">
              <a href="/menu" className="footer__link">
                Menú
              </a>
              <div className="footer__link-hover-effect"></div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
