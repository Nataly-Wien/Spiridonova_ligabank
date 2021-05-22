import React from 'react';
import PropTypes from 'prop-types';
import {CURRENCIES} from '../../const';

const CurrencySelect = ({selectName, currency}) => {
  return (
    <select className="converter-form__control converter-form__control--select" type="text" name={selectName}
      id="currency-have" value={currency}>
      {CURRENCIES.map((item, i) => {
        return (
          <option value={item} key={`${item}-${i}`}>{item}</option>
        );
      })}
    </select>
  );
};

CurrencySelect.propTypes = {
  selectName: PropTypes.string,
  currency: PropTypes.string,
};

export default CurrencySelect;
