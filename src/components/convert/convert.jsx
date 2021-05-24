import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {ActionCreator} from '../../store/action';
import CurrencyFieldset from '../currency-fieldset/currency-fieldset';
import DateField from '../date-field/date-field';
import {
  INITIAL_AMOUNT_HAVE, INITIAL_AMOUNT_NEED, INITIAL_CURRENCY_HAVE,
  INITIAL_CURRENCY_NEED
} from '../../const';

const Convert = ({currentCourse, historicalCourse, pushHistory}) => {
  const [inputs, setInputs] = useState({
    valueHave: INITIAL_AMOUNT_HAVE,
    valueNeed: INITIAL_AMOUNT_NEED,
    moneyHave: INITIAL_CURRENCY_HAVE,
    moneyNeed: INITIAL_CURRENCY_NEED,
    date: dayjs().format(`DD.MM.YYYY`),
  });

  const calculate = (amount, currency1, currency2, date) => {
    const getCourseToConvert = () => date === dayjs().format(`DD.MM.YYYY`) ? currentCourse : historicalCourse;
    return Number(((amount * getCourseToConvert()[currency1]) / getCourseToConvert()[currency2]).toFixed(4));
  };

  const onInputHaveChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed, date} = inputs;
    valueHave = +evt.target.value;
    valueNeed = calculate(valueHave, moneyNeed, moneyHave, date);
    setInputs({
      ...inputs,
      valueHave,
      valueNeed,
    });
  };

  const onInputNeedChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed, date} = inputs;
    valueNeed = +evt.target.value;
    valueHave = calculate(valueNeed, moneyHave, moneyNeed, date);
    setInputs({
      ...inputs,
      valueHave,
      valueNeed,
    });
  };

  const onSelectHaveChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed, date} = inputs;
    moneyHave = evt.target.value;
    valueHave = calculate(valueNeed, moneyHave, moneyNeed, date);
    setInputs({
      ...inputs,
      moneyHave,
      valueHave,
    });
  };

  const onSelectNeedChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed, date} = inputs;
    moneyNeed = evt.target.value;
    valueNeed = calculate(valueHave, moneyNeed, moneyHave, date);
    setInputs({
      ...inputs,
      moneyNeed,
      valueNeed,
    });
  };

  const onDateChange = (evt) => {
    let {valueHave, valueNeed, moneyHave, moneyNeed} = inputs;
    valueNeed = calculate(valueHave, moneyNeed, moneyHave, evt.target.value);
    setInputs({
      ...inputs,
      date: evt.target.value,
      valueNeed,
    });
  };

  const onSaveHistoryClick = () => pushHistory(inputs);

  return (
    <section className="converter container">
      <h2 className="converter__title">Конвертер валют</h2>
      <form className="converter__form converter-form" action="" method="post">
        <CurrencyFieldset legend={`У меня есть`} fieldName={`have`} amount={inputs.valueHave} currency={inputs.moneyHave}
          onInputChange={onInputHaveChange} onSelectChange={onSelectHaveChange} />
        <div className="converter-form__arrows"></div>
        <CurrencyFieldset legend={`Хочу приобрести`} fieldName={`need`} amount={inputs.valueNeed} currency={inputs.moneyNeed}
          onInputChange={onInputNeedChange} onSelectChange={onSelectNeedChange} />
        <DateField onDateChange={onDateChange} />
        <button className="converter-form__button button button--blue" type="button" onClick={onSaveHistoryClick}>Сохранить результат</button>
      </form>
    </section>
  );
};

Convert.propTypes = {
  currentCourse: PropTypes.object.isRequired,
  historicalCourse: PropTypes.arrayOf(PropTypes.object).isRequired,
  pushHistory: PropTypes.func.isRequired,
};

const mapStateToProps = ({currentCourse, historicalCourse}) => ({
  currentCourse,
  historicalCourse,
});

const mapDispatchToProps = (dispatch) => ({
  pushHistory: (historyItem) => dispatch(ActionCreator.addToHistory(historyItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Convert);
