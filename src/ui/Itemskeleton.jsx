import React from "react";

const Itemskeleton = () => {
  return (
    <div className="menu__item-skeleton-wrapper">
      <span className="item__img-skeleton-wrapper"></span>
      <span className="item__name--skeleton"></span>
      <span className="item__price--skeleton"></span>
    </div>
  );
};

export default Itemskeleton;
