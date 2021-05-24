import dayjs from 'dayjs';
import {ActionType} from './action';
import {HISTORY_MAX_LENGTH} from '../const';

const initialState = {
  currentCourse: {
    RUB: 0,
    USD: 0,
    EUR: 0,
    GBR: 0,
    CNY: 0,
  },
  historyCourse: [],
  historyDate: dayjs(),
  history: [],
  isLoading: false,
};

const addToHistory = (history, item) => {
  if (history.length < HISTORY_MAX_LENGTH) {
    return [...history, item];
  } else {
    return [...history.slice(1), item];
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };
    case ActionType.ADD_TO_HISTORY:
      return {
        ...state,
        history: addToHistory(state.history, action.payload),
        isLoading: false,
      };
    case ActionType.REQUEST_COURSE:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.LOAD_COURSE_TODAY:
      return {
        ...state,
        currentCourse: {...action.payload},
        isLoading: false,
      };
    case ActionType.FAILURE_COURSE:
      return {
        ...state,
        isLoading: false,
      };
    case ActionType.SET_HISTORY_DATE:
      return {
        ...state,

      };
  }

  return state;
};

export {reducer};
