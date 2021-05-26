import {ActionCreator} from './action';
import {UrlTail} from '../const';

export const fetchCurrentCourse = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestCourse());

  return (
    api.get(`${UrlTail.COURSE_TODAY}${UrlTail.ID}`)
      .then(({data}) => dispatch(ActionCreator.loadCourseToday({
        rub: data.rates.RUB,
        usd: data.rates.USD,
        eur: data.rates.EUR,
        gbp: data.rates.GBP,
        cny: data.rates.CNY,
      })))
      .catch(() => dispatch(ActionCreator.failureCourse()))
  );
};

export const fetchHistoryCourse = (historyDate) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestCourse());

  return (
    api.get(`${UrlTail.COURSE_HISTORY}${historyDate}${UrlTail.ID}`)
      .then(({data}) => dispatch(ActionCreator.loadCourseHistory({
        date: historyDate,
        rub: data.rates.RUB,
        usd: data.rates.USD,
        eur: data.rates.EUR,
        gbp: data.rates.GBP,
        cny: data.rates.CNY,
      })))
      .catch(() => dispatch(ActionCreator.failureCourse())));
};
