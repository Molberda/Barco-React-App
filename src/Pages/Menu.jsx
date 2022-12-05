import React from "react";
import { useState } from "react";
import Menuitem from "../ui/Menuitem";

const Menu = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);
  function filterItems(filter){
    if (filter === "HIGH_TO_LOW"){
      setItems(
        items.slice().sort((a, b) => (b.price) - (a.price))
      )
    }
    if (filter === "LOW_TO_HIGH"){
      setItems(
        items.slice().sort((a, b) => (a.price) - (b.price))
      )
    }
    if (filter === "BEBIDAS"){
      if(items.type === "bebida"){
        setItems(
          items.slice().find((item) => item.type == "bebida")
          )
      }
    }
  }
  
  return (
    <div className="landing__container container">
      <div className="row__column">
        <h1 className="title">Menú</h1>
        <div className="filter--group">
          <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterItems(event.target.value)}>
            <option value="DEFAULT" disabled>Filtrar</option>
            <option value="HIGH_TO_LOW">Precio, Mayor a Menor</option>
            <option value="LOW_TO_HIGH">Precio, Menor a Mayor</option>
            <option value="BEBIDAS">Bebidas</option>
            <option value="COMIDAS">Comidas</option>
          </select>
        </div>
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
