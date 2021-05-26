import PropTypes from 'prop-types';

const courseType = PropTypes.shape({
  rub: PropTypes.number.isRequired,
  usd: PropTypes.number.isRequired,
  eur: PropTypes.number.isRequired,
  gbp: PropTypes.number.isRequired,
  cny: PropTypes.number.isRequired,
  date: PropTypes.string,
}).isRequired;

const historyType = PropTypes.shape({
  valueHave: PropTypes.number.isRequired,
  valueNeed: PropTypes.number.isRequired,
  currencyHave: PropTypes.string.isRequired,
  currencyNeed: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export {courseType, historyType};
