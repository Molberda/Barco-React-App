import React from "react";

const Menuitem = ({ items }) => {
console.log(items[0])

  return (
    <div className="menu__item--wrapper">
      <figure className="item__img--wrapper">
        <img src={items[0].url} alt="" className="item__img" />
      </figure>
      <h3 className="item__name">{items[0].name}</h3>
      <h3 className="item__price">$10.00</h3>
    </div>
  );
};

export default Menuitem;
