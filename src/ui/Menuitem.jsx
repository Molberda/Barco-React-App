import React from "react";

const Menuitem = ({ item }) => {
console.log(item)

  return (
    <div className="menu__item--wrapper">
      <figure className="item__img--wrapper">
        <img src={item.url} alt="" className="item__img" />
      </figure>
      <h3 className="item__name">{item.name}</h3>
      <h3 className="item__price">${item.price.toFixed(3)}</h3>
    </div>
  );
};

export default Menuitem;
