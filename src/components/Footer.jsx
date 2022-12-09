import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/barco__logo.png";

const Footer = ({ link1, link2, link3, name1, name2, name3 }) => {
  return (
    <footer>
      <div className="footer__row">
        <figure className="footer__logo--wrapper">
          <span className="footer__pop-out">
            Top <FontAwesomeIcon icon="fa-solid fa-arrow-up" />{" "}
          </span>
          <a href="#landing" className="logo__link">
            <img src={Logo} alt="" className="footer__logo" />
          </a>
        </figure>
        <div className="footer__organizer">
          <ul className="footer__link--list">
            <li className="footer__list--item">
              <Link to="/#contactanos" className="footer__link">
                {/* <a href="#acerca" className="footer__link"> */}
                Acerca de Nosotros
                {/* </a> */}
              </Link>
              <div className="footer__link-hover-effect"></div>
            </li>
            <li className="footer__list--item">
              <Link to="/#contactanos" className="footer__link">
                {/* <a href="/#contactanos" className="footer__link"> */}
                Contáctanos
                {/* </a> */}
              </Link>
              <div className="footer__link-hover-effect"></div>
            </li>
            <li className="footer__list--item">
              <Link to="/menu" className="footer__link">
                Menú
              </Link>
              <div className="footer__link-hover-effect"></div>
            </li>
          </ul>
          <span className="copyright">
            Designed by David Möller &copy; 2022 for Bares Colombianos SAS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
