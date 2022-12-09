import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/barco__logo.png";

const Nav = ({ link1, link2, link3, name1, name2, name3}) => {
  return (
      <nav>
        <Link to="/">
          <figure className="barco__logo--wrapper">
            <img src={Logo} alt="logo" className="barco__logo" />
          </figure>
        </Link>
        <ul className="nav__link--list">
          <li className="nav__list--item">
            <a href="/#acerca" className="nav__link">
              Acerca de Nosotros
            </a>
            <div className="nav__link-hover-effect"></div>
          </li>
          <li className="nav__list--item">
            <a href="/#contactanos" className="nav__link">
              Contáctanos
            </a>
            <div className="nav__link-hover-effect"></div>
          </li>
          <li className="nav__list--item nav__link-list-primary click">
            <Link to="/menu" className="nav__link nav__link--primary">
              Menú
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
