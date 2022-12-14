import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/barco__logo.png";

const Nav = ({ link1, link2, link3, name1, name2, name3 }) => {
  function openMenu() {
    document.body.classList += " bars__menu"
  }
  return (
    <nav id="nav">
      <Link to="/">
        <figure className="barco__logo--wrapper">
          <img src={Logo} alt="logo" className="barco__logo" />
        </figure>
      </Link>
      <ul className="nav__link--list">
        <li className="nav__list--item">
          <a href={link1} className="nav__link">
            {name1}
          </a>
          <div className="nav__link-hover-effect"></div>
        </li>
        <li className="nav__list--item">
          <a href={link2} className="nav__link">
            {name2}
          </a>
          <div className="nav__link-hover-effect"></div>
        </li>
        <li className="nav__list--item nav__link-list-primary click">
          <Link to={link3} className="nav__link nav__link--primary">
            {name3}
          </Link>
        </li>
      </ul>
      <button className="nav__bars" onClick={() => openMenu()}>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
    </nav>
  );
};

export default Nav;
