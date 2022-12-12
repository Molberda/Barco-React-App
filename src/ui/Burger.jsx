import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Burger = () => {
  return (
    <div className="burger">
      <button className="burger__close">
        <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
      </button>
    </div>
  );
};

export default Burger;
