import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Menuitem from "../ui/Menuitem";

const Menu = ({ items: initialItems }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [items, setItems] = useState(initialItems);
  const priceHigh = initialItems.slice().sort((a, b) => b.price - a.price);
  const priceLow = initialItems.slice().sort((a, b) => a.price - b.price);
  const drinks = initialItems
    .filter((item) => item.type === "bebida")
    .sort((a, b) => b.price - a.price);
  const alchohol = initialItems
    .filter((item) => item.type === "bebida alchoholica")
    .sort((a, b) => b.price - a.price);
  const foods = initialItems
    .filter((item) => item.type === "comida")
    .sort((a, b) => b.price - a.price);
  const smoke = initialItems
    .filter((item) => item.type === "fumable")
    .sort((a, b) => b.price - a.price);

  function filterItems(filter) {
    if (filter === "HIGH_TO_LOW") {
      setItems(priceHigh);
    }

    if (filter === "LOW_TO_HIGH") {
      setItems(priceLow);
    }

    if (filter === "BEBIDAS") {
      setItems(drinks);
    }

    if (filter === "ALCHOHOL") {
      setItems(alchohol);
    }

    if (filter === "COMIDAS") {
      setItems(foods);
    }

    if (filter === "FUMABLE") {
      setItems(smoke);
    }
  }

  function showItems(){

  }

  return (
    <div>
      <Nav link3="/" name3="Home"/>
      <section id="menu">
        <div className="landing__container container">
          <div className="row__column">
            <h1 className="title">Menú</h1>
            <div className="filter--group">
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterItems(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Filtrar
                </option>
                <option value="HIGH_TO_LOW">Precio, Mayor a Menor</option>
                <option value="LOW_TO_HIGH">Precio, Menor a Mayor</option>
                <option value="BEBIDAS">Bebidas</option>
                <option value="ALCHOHOL">Bebidas Alchoholicas</option>
                <option value="COMIDAS">Comidas</option>
                <option value="FUMABLE">Para Fumar</option>
              </select>
            </div>
            <div className="menu__organizer">
              {items.map((item) => (
                <Menuitem item={item} key={item.id} />
              )).slice(0,15)}
            </div>
            <button className="open__items" onClick={showItems}>Show all Items</button>
          </div>
        </div>
      </section>
      <Footer name3="Home" link3="/" />
    </div>
  );
};

export default Menu;
