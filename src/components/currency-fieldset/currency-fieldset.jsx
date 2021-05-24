import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from '../currency-select/currency-select';

const CurrencyFieldset = ({legend, fieldName, amount, currency, onInputChange, onSelectChange}) => {
  const onInput = (evt) => {
    evt.target.value = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value).toFixed(4);
    evt.target.value = parseFloat(evt.target.value) < 0 ? -parseFloat(evt.target.value).toFixed(4) : parseFloat(evt.target.value).toFixed(4);
    // evt.target.value = isNaN(parseInt(evt.target.value, 10)) ? 0 : parseInt(evt.target.value, 10);
    // evt.target.value = parseInt(evt.target.value, 10) < 0 ? -parseInt(evt.target.value, 10) : parseInt(evt.target.value, 10);
    onInputChange(evt);
  };

  return (
    <fieldset className="converter-form__fieldset">
      <legend className="converter-form__legend">{legend}</legend>
      <input className="converter-form__control converter-form__control--input" type="text" name={fieldName} id={fieldName}
        value={amount} onInput={onInput} />
      <CurrencySelect selectName={`currency-${fieldName}`} currency={currency} onSelectChange={onSelectChange} />
    </fieldset>
  );
};

CurrencyFieldset.propTypes = {
  legend: PropTypes.string,
  fieldName: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
};

export default CurrencyFieldset;
