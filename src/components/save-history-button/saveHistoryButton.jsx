import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {historyType} from '../../types-validation';

const SaveHistoryButton = ({data, pushHistory}) => {
  const onSaveHistoryClick = () => pushHistory(data);

  return (
    <button className="converter-form__button button button--blue" type="button"
      onClick={onSaveHistoryClick}>Сохранить результат</button>
  );
};

SaveHistoryButton.propTypes = {
  data: historyType.isRequired,
  pushHistory: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  pushHistory: (historyItem) => dispatch(ActionCreator.addToHistory(historyItem)),
});

export default connect(null, mapDispatchToProps)(SaveHistoryButton);
