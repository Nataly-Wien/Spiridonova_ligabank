import {ActionType} from './action';
import {HISTORY_MAX_LENGTH} from '../const';

const initialState = {
  todayCourse: {
    rub: 0,
    usd: 0,
    eur: 0,
    gbp: 0,
    cny: 0,
  },
  currentCourse: {
    rub: 0,
    usd: 0,
    eur: 0,
    gbp: 0,
    cny: 0,
  },
  historicalCourses: [],
  historyList: [],
  isLoading: false,
  isError: false,
};

const addToHistory = (history, newItem) => {
  if (history.length < HISTORY_MAX_LENGTH) {
    return [newItem, ...history];
  }
  return [newItem, ...history.slice(0, -1)];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_COURSE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ActionType.LOAD_COURSE_TODAY:
      return {
        ...state,
        todayCourse: {...action.payload},
        currentCourse: {...action.payload},
        isLoading: false,
        isError: false,
      };
    case ActionType.LOAD_COURSE_HISTORY:
      return {
        ...state,
        historicalCourses: [...state.historicalCourses, action.payload],
        currentCourse: {...action.payload},
        isLoading: false,
        isError: false,
      };
    case ActionType.FAILURE_COURSE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ActionType.SET_CURRENT_COURSE:
      return {
        ...state,
        currentCourse: {...action.payload},
      };
    case ActionType.CLEAR_HISTORY:
      return {
        ...state,
        historyList: [],
      };
    case ActionType.ADD_TO_HISTORY:
      return {
        ...state,
        historyList: addToHistory(state.historyList, action.payload),
      };
  }
  return state;
};

export {reducer};
