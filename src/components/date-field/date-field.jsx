import React from 'react';
import PropTypes from 'prop-types';

const DateField = ({date}) => {
  return (
    <div className="converter-form__wrapper">
      <input className="converter-form__control converter-form__control--input converter-form__control--input-date"
        type="text" name="date" id="date" value={date} required />
      <button className="converter-form__calender" type="button" id="calender"
        aria-label="Открыть календарь для выбора даты"></button>
    </div>
  );
};

DateField.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateField;
