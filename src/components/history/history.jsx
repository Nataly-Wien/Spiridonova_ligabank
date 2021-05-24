import React from 'react';

const onClearHistoryClick = () => {
  // array = [];
};

const History = () => {
  return (
    <section className="history container">
      <div className="history__wrapper">
        <h2 className="history__title">История конвертаций</h2>
        <ul className="history__list">
          <li className="history__item">
            <span className="history__item--date">25.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">26.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">27.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">28.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">29.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">30.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">31.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">100 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">31.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
          <li className="history__item">
            <span className="history__item--date">31.11.2020</span>
            <div className="history__item-wrapper">
              <span className="history__item--before">1000 RUB</span>
              <span className="history__item--arrow">
                <span className="visually-hidden">&#10230;</span>
              </span>
              <span className="history__item--after">13,1234 USD</span>
            </div>
          </li>
        </ul>
        <button className="history__button button button--blue" onClick={onClearHistoryClick}>Очистить историю</button>
      </div>
    </section>
  );
};

export default History;
