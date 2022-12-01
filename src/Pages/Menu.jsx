import React from "react";

const Menu = () => {
  return (
    <div className="landing__container container">
      <div className="row__column">
        <h1 className="title">Menu Items</h1>
        <div className="menu__organizer">
            <div className="menu__item--wrapper">
                <figure className="item__img--wrapper">
                    <img src="" alt="" className="item__img" />
                </figure>
                <h3 className="item__name">Pola</h3>
                <h3 className="item__price">$10.00</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
