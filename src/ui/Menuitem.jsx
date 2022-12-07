import React, { useEffect, useState } from "react";

const Menuitem = ({ item }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = item.url;

    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 800);
    }
  });

  return (
    <div className="menu__item--wrapper">
      {img ? (
        <>
          <figure
            className="item__img--wrapper"
            onClick={() => alert("¡Esta funcion no esta incluida aun!")}
          >
            <img src={img.src} alt="" className="item__img" />
          </figure>
          <h3 className="item__name">{item.name}</h3>
          <h3 className="item__price">${item.price.toFixed(3)}</h3>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menuitem;
