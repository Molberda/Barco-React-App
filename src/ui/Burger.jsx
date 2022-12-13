import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  function closeMenu(){
    document.body.classList.remove("bars__menu")
  }
  return (
    <div className="burger">
      <button className="burger__close" onClick={() => closeMenu()}>
        Close Menu
        <FontAwesomeIcon icon="fa-solid fa-times-circle"/>
      </button>
      <ul className="burger__link--list">
        <li className="burger__list--item">
          <Link className="burger__link" to="/" onClick={() => closeMenu()}>Home</Link>
        </li>
        <li className="burger__list--item">
          <Link className="burger__link" to="/menu" onClick={() => closeMenu()}>Menú</Link>
        </li>
      </ul>
    </div>
  );
};

export default Burger;
