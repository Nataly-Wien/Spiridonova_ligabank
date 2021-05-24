import React from 'react';
import PropTypes from 'prop-types';
import {Currency} from '../../const';

const CurrencySelect = ({selectName, currency, onSelectChange}) => {
  return (
    <select className="converter-form__control converter-form__control--select" name={selectName}
      id="currency-have" defaultValue={currency} onChange={onSelectChange}>
      {Object.values(Currency).map((item, i) => {
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
  onSelectChange: PropTypes.func.isRequired,
};

export default CurrencySelect;
