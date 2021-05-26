import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {ActionCreator} from '../../store/action';
import CurrencyFieldset from '../currency-fieldset/currency-fieldset';
import DateField from '../date-field/date-field';
import SaveHistoryButton from '../save-history-button/saveHistoryButton';
import {fetchHistoryCourse} from '../../store/api-actions';
import {formatDate, isToday} from '../../common';
import {INITIAL_AMOUNT, INITIAL_CURRENCY} from '../../const';
import {courseType} from '../../types-validation';

const Convert = ({currentCourse, todayCourse, historicalCourses, setCourse, loadHistoryCourse, isLoading, isError}) => {

  const [inputs, setInputs] = useState({
    valueHave: INITIAL_AMOUNT,
    valueNeed: INITIAL_AMOUNT,
    currencyHave: INITIAL_CURRENCY.have,
    currencyNeed: INITIAL_CURRENCY.need,
    date: dayjs().format(`DD.MM.YYYY`),
  });

  const convert = (amount, currency1, currency2) => {
    const result = Number(((amount * currentCourse[currency1.toLowerCase()]) / currentCourse[currency2.toLowerCase()]).toFixed(4));

    return isNaN(result) ? 0 : result;
  };

  const onInputHaveChange = (value) => {
    let {valueHave, valueNeed, currencyHave, currencyNeed} = inputs;
    valueHave = value;
    valueNeed = convert(valueHave, currencyNeed, currencyHave);
    setInputs({
      ...inputs,
      valueHave,
      valueNeed,
    });
  };

  const onInputNeedChange = (value) => {
    let {valueHave, valueNeed, currencyHave, currencyNeed} = inputs;
    valueNeed = value;
    valueHave = convert(valueNeed, currencyHave, currencyNeed);
    setInputs({
      ...inputs,
      valueHave,
      valueNeed,
    });
  };

  const onSelectHaveChange = (value) => {
    let {valueHave, valueNeed, currencyHave, currencyNeed} = inputs;
    currencyHave = value;
    valueNeed = convert(valueHave, currencyNeed, currencyHave);
    setInputs({
      ...inputs,
      currencyHave,
      valueNeed,
    });
  };

  const onSelectNeedChange = (value) => {
    let {valueHave, valueNeed, currencyHave, currencyNeed} = inputs;
    currencyNeed = value;
    valueNeed = convert(valueHave, currencyNeed, currencyHave);
    setInputs({
      ...inputs,
      currencyNeed,
      valueNeed,
    });
  };

  const onDateChange = (calenderDate) => {
    setInputs({
      ...inputs,
      date: calenderDate,
    });

    if (isToday(calenderDate)) {
      setCourse({...todayCourse});
    } else {
      const course = (historicalCourses.find((item) => item.date === formatDate(calenderDate)));
      if (course) {
        setCourse({...course});
      } else {
        loadHistoryCourse(formatDate(calenderDate));
      }
    }
  };

  return (
    <section className="converter container">
      <h2 className="converter__title">Конвертер валют</h2>
      <form className="converter__form converter-form" action="" method="post">
        <CurrencyFieldset legend={`У меня есть`} fieldName={`have`} amount={inputs.valueHave} currency={inputs.currencyHave}
          onInputChange={onInputHaveChange} onSelectChange={onSelectHaveChange} />
        {!isLoading && <div className="converter-form__arrows"></div> ||
          <div className="converter-form__arrows converter-form__arrows--spinner"></div>}
        <CurrencyFieldset legend={`Хочу приобрести`} fieldName={`need`} amount={inputs.valueNeed} currency={inputs.currencyNeed}
          onInputChange={onInputNeedChange} onSelectChange={onSelectNeedChange} />
        <DateField date={inputs.date} onDateChange={onDateChange} />
        {isError && <div className="converter-form__error">Ошибка сети, курс не загружен</div>}
        <SaveHistoryButton data={inputs} />
      </form>
    </section>
  );
};

Convert.propTypes = {
  currentCourse: courseType,
  todayCourse: courseType,
  historicalCourses: PropTypes.arrayOf(courseType).isRequired,
  loadHistoryCourse: PropTypes.func.isRequired,
  setCourse: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

const mapStateToProps = ({currentCourse, todayCourse, historicalCourses, isLoading, isError}) => ({
  currentCourse,
  todayCourse,
  historicalCourses,
  isLoading,
  isError,
});

const mapDispatchToProps = (dispatch) => ({
  loadHistoryCourse: (courseDate) => dispatch(fetchHistoryCourse(courseDate)),
  setCourse: (course) => dispatch(ActionCreator.setCurrentCourse(course)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Convert);
