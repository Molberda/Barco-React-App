import React from 'react';

const Nav = () => {
    return (
        <nav>
          <figure className="barco__logo--wrapper">
            <img
              src="./assets/barco__logo.png"
              alt="logo"
              className="barco__logo"
            />
          </figure>
          <ul className="nav__link--list">
            <li className="nav__list--item">
              <a href="#acerca" className="nav__link">Acerca de Nosotros</a>
              <div className="nav__link-hover-effect"></div>
            </li>
            <li className="nav__list--item">
              <a href="#contactanos" className="nav__link">Contáctanos</a>
              <div className="nav__link-hover-effect"></div>
            </li>
            <li className="nav__list--item nav__link-list-primary click">
              <a href="/menu.html" className="nav__link nav__link--primary">Menú</a>
            </li>
          </ul>
        </nav>
    );
}

export default Nav;
