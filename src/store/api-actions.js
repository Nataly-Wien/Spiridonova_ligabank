import {ActionCreator} from './action';
import {UrlTail} from '../const';

// export const fetchCurrentCourse = (currencyHave, currencyNeed) => (dispatch, _getState, api) => {
export const fetchCurrentCourse = () => (dispatch, _getState, api) => {

  dispatch(ActionCreator.requestCourse());

  const data = {
    rates: {
      RUB: 73.58,
      CNY: 6.43,
      EUR: 0.82,
      GBR: 0.7,
      USD: 1,
    }
  };
  // dispatch(ActionCreator.loadCourseToday(data.rates[currencyNeed] / data.rates[currencyHave]));
  dispatch(ActionCreator.loadCourseToday(data.rates));


  // return (
  //   api.get(`${UrlTail.COURSE_TODAY}${currencyHave},${currencyNeed}`) ???

  //   api.get(`${UrlTail.COURSE_TODAY}${UrlTail.ID}`)
  //     .then(({data}) => {
  //       dispatch(ActionCreator.loadCourseToday({date: date, courses: data.rates)});
  //     })
  //     .catch(() => dispatch(ActionCreator.failureCourse()))
  // );
};

export const fetchHistoryCourse = (historyDate) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestCourse());

  // return (
  //   api.get(`${UrlTail.COURSE_HISTORY}${historyDate}${UrlTail.ID}`)
  //     .then(({data}) => dispatch(ActionCreator.loadCourseHistory({
  //       // date: historyDate,
  //       // course: {
  //       //   RUB: data.rates.RUB,
  //       //   USD: data.rates.USD,
  //       //   EUR: data.rates.EUR,
  //       //   GBR: data.rates.GBR,
  //       //   CNY: data.rates.CNY,
  //       // },
  //       RUB: data.rates.RUB,
  //       USD: data.rates.USD,
  //       EUR: data.rates.EUR,
  //       GBR: data.rates.GBR,
  //       CNY: data.rates.CNY,
  //     })))
  //     .catch(() => dispatch(ActionCreator.failureCourse())));
  dispatch(ActionCreator.loadCourseHistory({
    RUB: 70.58,
    CNY: 6.55,
    EUR: 0.9875,
    GBR: 0.234,
    USD: 1,
  }));
};
