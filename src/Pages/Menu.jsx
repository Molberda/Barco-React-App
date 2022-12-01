import React from "react";
import Menuitem from "../ui/Menuitem";

const Menu = () => {
  return (
    <div className="landing__container container">
      <div className="row__column">
        <h1 className="title">Menu Items</h1>
        <div className="menu__organizer">
            <Menuitem />
            <Menuitem />
            <Menuitem />
            <Menuitem />
            <Menuitem />
            <Menuitem />
            <Menuitem />
        </div>
      </div>
    </div>
  );
};

export default Menu;
