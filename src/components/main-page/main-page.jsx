import React from 'react';
import dayjs from 'dayjs';
import Header from '../header/header';
import CurrencyField from '../currency-field/currency-field';
import DateField from '../date-field/date-field';
import History from '../history/history';
import Footer from '../footer/footer';

const MainPage = () => {
  const amount = 1000;
  const currency = `RUB`;
  const dateNow = dayjs().format(`DD.MM.YYYY`);

  return (
    <div className="page">
      <Header />
      <main className="page-main">
        <section className="promo">
          <div className="promo__wrapper container">
            <h1 className="promo__title">Лига Банк</h1>
            <h2 className="promo__slogan">Кредиты на любой случай</h2>
            <a className="promo__button button button--white" href="#">Рассчитать кредит</a>
          </div>
        </section>
        <section className="converter container">
          <h2 className="converter__title">Конвертер валют</h2>
          <form className="converter__form converter-form" action="" method="post">
            <CurrencyField legend={`У меня есть`} fieldName={`have`} amount={amount} currency={currency} />
            <div className="converter-form__arrows"></div>
            <CurrencyField legend={`Хочу приобрести`} fieldName={`need`} amount={amount} currency={currency} />
            <DateField date={dateNow} />
            <button className="converter-form__button button button--blue" type="submit">Сохранить результат</button>
          </form>
        </section>
        <History />
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
