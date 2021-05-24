export const ActionType = {
  CLEAR_HISTORY: `history/clearHistory`,
  ADD_TO_HISTORY: `history/addToHistory`,
  REQUEST_COURSE: `data/requestCourse`,
  FAILURE_COURSE: `data/failureCourse`,
  LOAD_COURSE_TODAY: `data/loadCourseToday`,
  LOAD_COURSE_HISTORY: `data/loadCourseHistory`,
  SET_HISTORY_DATE: `history/setDate`,
};

export const ActionCreator = {
  clearHistory: () => ({
    type: ActionType.CLEAR_HISTORY,
  }),
  addToHistory: (payload) => ({
    type: ActionType.ADD_TO_HISTORY,
    payload,
  }),
  requestCourse: () => ({
    type: ActionType.REQUEST_COURSE,
  }),
  failureCourse: () => ({
    type: ActionType.FAILURE_COURSE,
  }),
  loadCourseToday: (payload) => ({
    type: ActionType.LOAD_COURSE_TODAY,
    payload,
  }),
  loadCourseHistory: (payload) => ({
    type: ActionType.LOAD_COURSE_HISTORY,
    payload,
  }),
  setHistoryDate: (payload) => ({
    type: ActionType.SET_HISTORY_DATE,
    payload,
  }),
};
