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
  // historicalCourse: [],
  historicalCourse: {},
  historyList: [],
  isLoading: false,
};

const addToHistory = (history, newItem) => {
  if (history.length < HISTORY_MAX_LENGTH) {
    return [newItem, ...history];
  }
  return [newItem, ...history.slice(0, -1)];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_HISTORY:
      return {
        ...state,
        historyList: [],
      };
    case ActionType.ADD_TO_HISTORY:
      return {
        ...state,
        historyList: addToHistory(state.historyList, action.payload),
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
    case ActionType.LOAD_COURSE_HISTORY:
      return {
        ...state,
        historicalCourse: action.payload,
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
