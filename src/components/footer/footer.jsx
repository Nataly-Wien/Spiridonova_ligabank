import React from 'react';
import {MAIN_MENU_ITEMS, CURRENT_PAGE} from '../../const';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <section className="footer__info">
          <h3 className="visually-hidden">О нас</h3>
          <a className="footer__logo" href="#">
            <img className="logo-img" src="img/logo_ligabank.svg" width="150" height="27" alt="Логотип Лига Банка" />
          </a>
          <p className="footer__text">150015, г. Москва, ул. Московская, д. 32</p>
          <p className="footer__text">Генеральная лицензияБанка России №1050</p>
          <p className="footer__text">Ⓒ Лига Банк, 2019</p>
        </section>
        <ul className="footer__menu footer-menu">
          {MAIN_MENU_ITEMS.map((item, i) => {
            return item !== CURRENT_PAGE ? (
              <li className="footer-menu__item" key={`${item}-${i}`}>
                <a className="footer-menu__link menu-link" href="#">{item}</a>
              </li>
            ) : ``;
          })}
        </ul>
        <section className="footer__contact-block footer__contact-block--mobile">
          <h3 className="visually-hidden">Короткий номер</h3>
          <p className="footer__contact">*0904</p>
          <p className="footer__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </section>
        <section className="footer__contact-block footer__contact-block--phone">
          <h3 className="visually-hidden">Телефон</h3>
          <p className="footer__contact">8 800 111 22 33</p>
          <p className="footer__text">Бесплатный для всех городов России</p>
        </section>
        <ul className="footer__social-list social">
          <li className="social__item">
            <a className="social__link" href="#">
              <span className="visually-hidden">Фейсбук</span>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16" width="9" height="16">
                <path
                  d="M6 9.2h2.143L9 6H6V4.4c0-.824 0-1.6 1.714-1.6H9V.112A25.85 25.85 0 006.551 0c-2.327 0-3.98 1.326-3.98 3.76V6H0v3.2h2.571V16H6V9.2z"
                  fill="#1F1E25" />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#">
              <span className="visually-hidden">Инстаграм</span>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                <path
                  d="M8 0c2.174 0 2.445.008 3.298.048.852.04 1.432.174 1.942.372a3.9 3.9 0 011.418.922c.406.4.721.884.922 1.418.198.51.332 1.09.372 1.942C15.99 5.555 16 5.826 16 8s-.008 2.445-.048 3.298c-.04.852-.174 1.432-.372 1.942a3.907 3.907 0 01-.922 1.418c-.4.406-.884.721-1.418.922-.51.198-1.09.332-1.942.372C10.445 15.99 10.174 16 8 16s-2.445-.008-3.298-.048c-.852-.04-1.432-.174-1.942-.372a3.911 3.911 0 01-1.418-.922A3.923 3.923 0 01.42 13.24c-.198-.51-.332-1.09-.372-1.942C.01 10.445 0 10.174 0 8s.008-2.445.048-3.298C.088 3.85.222 3.27.42 2.76c.2-.534.515-1.018.922-1.418.4-.407.884-.721 1.418-.922C3.27.222 3.85.088 4.702.048 5.555.01 5.826 0 8 0zm0 4a4 4 0 100 8 4 4 0 000-8zm5.2-.2a1 1 0 10-2 0 1 1 0 002 0zM8 5.6a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z"
                  fill="#1F1E25" />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#">
              <span className="visually-hidden">Твитер</span>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" width="16" height="13">
                <path
                  d="M16 1.543c-.6.265-1.236.44-1.886.516A3.292 3.292 0 0015.558.244a6.564 6.564 0 01-2.085.796A3.283 3.283 0 007.88 4.032 9.325 9.325 0 011.114.604a3.28 3.28 0 001.016 4.38 3.273 3.273 0 01-1.487-.41v.04a3.281 3.281 0 002.633 3.218c-.484.13-.99.15-1.483.056a3.283 3.283 0 003.066 2.279A6.59 6.59 0 010 11.525 9.29 9.29 0 005.031 13c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424A6.667 6.667 0 0016 1.544z"
                  fill="#1F1E25" />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#">
              <span className="visually-hidden">Youtube</span>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" width="16" height="13">
                <path
                  d="M15.634 2.03C16 3.478 16 6.5 16 6.5s0 3.023-.366 4.47c-.203.8-.797 1.43-1.55 1.643C12.717 13 8 13 8 13s-4.714 0-6.084-.387c-.756-.216-1.35-.845-1.55-1.643C0 9.523 0 6.5 0 6.5s0-3.022.366-4.47c.203-.8.797-1.43 1.55-1.643C3.286 0 8 0 8 0s4.717 0 6.084.387c.756.216 1.35.845 1.55 1.643zM6.4 9.344L11.2 6.5 6.4 3.656v5.688z"
                  fill="#1F1E25" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
