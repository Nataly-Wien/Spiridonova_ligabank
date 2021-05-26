import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import dayjs from 'dayjs';
import '../../../node_modules/flatpickr/dist/flatpickr.min.css';

const DateField = ({date, onDateChange}) => {

  useEffect(() => {
    flatpickr(`#date`, {
      dateFormat: `j.m.Y`,
      minDate: dayjs().subtract(7, `day`).format(`DD.MM.YYYY`),
      maxDate: dayjs().format(`DD.MM.YYYY`),
      enableTime: false,
    });

    // return function destroyCalender() {
    //   flatpickr().destroy();
    // }; ??
  }, []);

  const onDateInput = (evt) => {
    onDateChange(evt.target.value);
  };

  return (
    <div className="converter-form__wrapper">
      <input className="converter-form__control converter-form__control--input converter-form__control--input-date"
        type="text" name="date" id="date" value={date} onInput={onDateInput} required />
      <span className="converter-form__calender" aria-label="Открыть календарь для выбора даты"></span>
    </div>
  );
};

DateField.propTypes = {
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DateField;
