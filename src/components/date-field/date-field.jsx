import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import dayjs from 'dayjs';
import {fetchHistoryCourse} from '../../store/api-actions';
import '../../../node_modules/flatpickr/dist/flatpickr.min.css';

const DateField = ({loadHistoryCourse, onDateChange}) => {
  useEffect(() => {
    flatpickr(`#date`, {
      dateFormat: `j.m.Y`,
      minDate: dayjs().subtract(7, `day`).format(`DD.MM.YYYY`),
      maxDate: dayjs().format(`DD.MM.YYYY`),
      enableTime: false,
    });
  }, []);

  const [courseDate, setCourseDate] = useState(dayjs().format(`DD.MM.YYYY`));

  const onDateInput = (evt) => {
    setCourseDate(evt.target.value);
    onDateChange(evt);
    loadHistoryCourse(evt.target.value.split(`.`).reverse().join(`.`).replaceAll(`.`, `-`));
  };

  // const isHistoricalCourseReceived = (courses, date) => courses.find((item) => item.date === date.date);

  return (
    <div className="converter-form__wrapper">
      <input className="converter-form__control converter-form__control--input converter-form__control--input-date"
        type="text" name="date" id="date" value={courseDate} onInput={onDateInput} required />
      <button className="converter-form__calender" type="button" id="calender"
        aria-label="Открыть календарь для выбора даты"></button>
    </div>
  );
};

DateField.propTypes = {
  loadHistoryCourse: PropTypes.func.isRequired,
  historicalCourse: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadHistoryCourse: (courseDate) => dispatch(fetchHistoryCourse(courseDate)),
});

export default connect(null, mapDispatchToProps)(DateField);
