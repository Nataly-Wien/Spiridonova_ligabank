import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from '../currency-select/currency-select';

const CurrencyFieldset = ({legend, fieldName, amount, currency, onInputChange, onSelectChange}) => {
  const onFieldInput = (evt) => {
    evt.target.value = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value).toFixed(4);
    evt.target.value = parseFloat(evt.target.value) < 0 ? -parseFloat(evt.target.value).toFixed(4) : parseFloat(evt.target.value).toFixed(4);
    onInputChange(+evt.target.value);
  };

  const onSelectInput = (evt) => {
    onSelectChange(evt.target.value);
  };

  return (
    <fieldset className="converter-form__fieldset">
      <legend className="converter-form__legend">{legend}</legend>
      <input className="converter-form__control converter-form__control--input" type="text" name={fieldName} id={fieldName}
        value={amount} onInput={onFieldInput} />
      <CurrencySelect selectName={`currency-${fieldName}`} currency={currency} onSelectChange={onSelectInput} />
    </fieldset>
  );
};

CurrencyFieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
};

export default CurrencyFieldset;
