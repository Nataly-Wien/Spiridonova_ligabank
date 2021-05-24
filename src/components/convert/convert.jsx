import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import CurrencyFieldset from '../currency-fieldset/currency-fieldset';
import DateField from '../date-field/date-field';
import {
  INITIAL_AMOUNT_HAVE, INITIAL_AMOUNT_NEED, INITIAL_CURRENCY_HAVE,
  INITIAL_CURRENCY_NEED
} from '../../const';

const dateNow = dayjs().format(`DD.MM.YYYY`);

const Convert = ({currentCourse}) => {
  const [inputs, setInputs] = useState({
    valueHave: INITIAL_AMOUNT_HAVE,
    valueNeed: INITIAL_AMOUNT_NEED,
    moneyHave: INITIAL_CURRENCY_HAVE,
    moneyNeed: INITIAL_CURRENCY_NEED,
  });

  const calculate = (amount, currency1, currency2) => Number(((amount * currentCourse[currency1]) / currentCourse[currency2]).toFixed(4));

  const onInputHaveChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed} = inputs;
    valueHave = +evt.target.value;
    valueNeed = calculate(valueHave, moneyNeed, moneyHave);
    setInputs({
      ...inputs,
      valueHave,
      valueNeed,
    });
  };

  const onInputNeedChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed} = inputs;
    valueNeed = +evt.target.value;
    valueHave = calculate(valueNeed, moneyHave, moneyNeed);
    setInputs({
      ...inputs,
      valueHave,
      valueNeed,
    });
  };

  const onSelectHaveChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed} = inputs;
    moneyHave = evt.target.value;
    valueHave = calculate(valueNeed, moneyHave, moneyNeed);
    setInputs({
      ...inputs,
      moneyHave,
      valueHave,
    });
  };

  const onSelectNeedChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed} = inputs;
    moneyNeed = evt.target.value;
    valueNeed = calculate(valueHave, moneyNeed, moneyHave);
    setInputs({
      ...inputs,
      moneyNeed,
      valueNeed,
    });
  };

  return (
    <section className="converter container">
      <h2 className="converter__title">Конвертер валют</h2>
      <form className="converter__form converter-form" action="" method="post">
        <CurrencyFieldset legend={`У меня есть`} fieldName={`have`} amount={inputs.valueHave} currency={inputs.moneyHave}
          onInputChange={onInputHaveChange} onSelectChange={onSelectHaveChange} />
        <div className="converter-form__arrows"></div>
        <CurrencyFieldset legend={`Хочу приобрести`} fieldName={`need`} amount={inputs.valueNeed} currency={inputs.moneyNeed}
          onInputChange={onInputNeedChange} onSelectChange={onSelectNeedChange} />
        <DateField date={dateNow} />
        <button className="converter-form__button button button--blue" type="submit">Сохранить результат</button>
      </form>
    </section>
  );
};

Convert.propTypes = {
  currentCourse: PropTypes.object.isRequired,
};

const mapStateToProps = ({currentCourse}) => ({
  currentCourse,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Convert);
