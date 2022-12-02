import React from "react";

const Menuitem = ({ items }) => {
console.log(items)

  return (
    <div className="menu__item--wrapper">
      <figure className="item__img--wrapper">
        <img src="" alt="" className="item__img" />
      </figure>
      <h3 className="item__name">pola</h3>
      <h3 className="item__price">$10.00</h3>
    </div>
  );
};

export default Menuitem;
