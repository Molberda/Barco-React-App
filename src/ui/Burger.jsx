import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Burger = () => {
  return (
    <div className="burger">
      <button className="burger__close">
        Close Menu
        <FontAwesomeIcon icon="fa-solid fa-times-circle"/>
      </button>
      <ul className="burger__link--list"></ul>
    </div>
  );
};

export default Burger;
