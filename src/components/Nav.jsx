import React from 'react';

const Nav = () => {
    return (
        <nav>
          <figure class="barco__logo--wrapper">
            <img
              src="./assets/barco__logo.png"
              alt="logo"
              class="barco__logo"
            />
          </figure>
          <ul class="nav__link--list">
            <li class="nav__list--item">
              <a href="#acerca" class="nav__link">Acerca de Nosotros</a>
              <div class="nav__link-hover-effect"></div>
            </li>
            <li class="nav__list--item">
              <a href="#contactanos" class="nav__link">Contáctanos</a>
              <div class="nav__link-hover-effect"></div>
            </li>
            <li class="nav__list--item nav__link-list-primary click">
              <a href="/menu.html" class="nav__link nav__link--primary">Menú</a>
            </li>
          </ul>
        </nav>
    );
}

export default Nav;
