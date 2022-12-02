import React from "react";
import Menuitem from "../ui/Menuitem";

const Menu = ({ items }) => {
  return (
    <div className="landing__container container">
      <div className="row__column">
        <h1 className="title">Menu Items</h1>
        <div className="menu__organizer">
          <Menuitem items={items} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
