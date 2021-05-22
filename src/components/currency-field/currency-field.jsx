import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelect from '../currency-select/currency-select';

const CurrencyField = ({legend, fieldName, amount, currency}) => {
  return (
    <fieldset className="converter-form__fieldset">
      <legend className="converter-form__legend" htmlFor={fieldName}>{legend}</legend>
      <input className="converter-form__control converter-form__control--input" type="text" name={fieldName} id={fieldName}
        value={amount} />
      <CurrencySelect selectName={`currency-${fieldName}`} currency={currency} />
    </fieldset>
  );
};

CurrencyField.propTypes = {
  legend: PropTypes.string,
  fieldName: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default CurrencyField;
