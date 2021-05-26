import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {historyType} from '../../types-validation';

const History = ({historyList, clearHistory}) => {
  const onClearHistoryClick = () => clearHistory();

  return (
    <section className="history container">
      <div className="history__wrapper">
        <h2 className="history__title">История конвертаций</h2>
        <ul className="history__list">
          {historyList.map((item, i) => {
            return (<li className="history__item" key={`${item}-${i}`}>
              <span className="history__item--date">{item.date}</span>
              <div className="history__item-wrapper">
                <span className="history__item--before">{`${item.valueHave} ${item.currencyHave}`}</span>
                <span className="history__item--arrow">
                  <span className="visually-hidden">&#10230;</span>
                </span>
                <span className="history__item--after">{`${item.valueNeed} ${item.currencyHave}`}</span>
              </div>
            </li>);
          })}
        </ul>
        <button className="history__button button button--blue" onClick={onClearHistoryClick}>Очистить историю</button>
      </div>
    </section>
  );
};

History.propTypes = {
  historyList: PropTypes.arrayOf(historyType).isRequired,
  clearHistory: PropTypes.func.isRequired,
};

const mapStateToProps = ({historyList}) => ({
  historyList,
});

const mapDispatchToProps = (dispatch) => ({
  clearHistory: () => dispatch(ActionCreator.clearHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
