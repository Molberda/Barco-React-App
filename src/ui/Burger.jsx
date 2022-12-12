import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Burger = () => {
  return (
    <div className="burger">
      <button className="burger__close">
        Close Menu
        <FontAwesomeIcon icon="fa-solid fa-times-circle"/>
      </button>
      
    </div>
  );
};

export default Burger;
