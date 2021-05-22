import React from 'react';
import {MAIN_MENU_ITEMS} from '../../const';

const Header = () => {
  return (
    <header className="page-header">
      <nav className="main-nav container">
        <a className="main-nav__logo" href="#">
          <img className="logo-img" src="img/logo_ligabank.svg" width="150" height="27" alt="Логотип Лига Банка" />
        </a>
        <ul className="main-nav__main-menu main-menu">
          {MAIN_MENU_ITEMS.map((item, i) => {
            return (
              <li className="main-menu__item" key={`${item}-${i}`}>
                <a className="main-menu__link menu-link" href="#">{item}</a>
              </li>
            );
          })}
        </ul>
        <ul className="main-nav__user-nav user-nav">
          <li className="user-nav__item">
            <a className="user-nav__link user-nav__link--enter menu-link" href="#">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22" width="20" height="22">
                <path
                  d="M2.222 14.3h2.222v5.5h13.334V2.2H4.444v5.5H2.222V1.1c0-.292.117-.572.326-.778.208-.206.49-.322.785-.322H18.89c.295 0 .577.116.786.322.208.206.325.486.325.778v19.8c0 .292-.117.572-.325.778a1.117 1.117 0 01-.786.322H3.333c-.294 0-.577-.116-.785-.322a1.095 1.095 0 01-.326-.778v-6.6zM8.89 9.9V6.6l5.555 4.4-5.555 4.4v-3.3H0V9.9h8.889z"
                  fill="#1F1E25" />
              </svg>
              Войти в Интернет-банк
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
