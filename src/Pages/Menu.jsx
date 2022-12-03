import React from "react";
import Menuitem from "../ui/Menuitem";

const Menu = ({ items }) => {
  return (
    <div className="landing__container container">
      <div className="row__column">
        <h1 className="title">Menú</h1>
        <div className="menu__organizer">
          {items.map((item) => (
            <Menuitem item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
