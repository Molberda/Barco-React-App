import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <div className="burger">
      <button className="burger__close">
        Close Menu
        <FontAwesomeIcon icon="fa-solid fa-times-circle"/>
      </button>
      <ul className="burger__link--list">
        <li className="buger__list--item">
          <Link to="/">Home</Link>
        </li>
        <li className="buger__list--item">
          <Link to="/menu">Menú</Link>
        </li>
      </ul>
    </div>
  );
};

export default Burger;
