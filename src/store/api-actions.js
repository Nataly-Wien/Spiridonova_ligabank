import {ActionCreator} from './action';
// import {Url} from '../const';

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
  //   api.get(`${Url.COURSE_TODAY}${currencyHave},${currencyNeed}`)
  //   api.get(`${Url.COURSE_TODAY}`)
  //     .then(({data}) => {
  //       dispatch(ActionCreator.loadCourseToday(data.rates[currencyNeed] / data.rates[currencyHave]));
  //     })
  //     .catch(() => dispatch(ActionCreator.failureCourse()))
  // );
};

// export const fetchHistoryCourse = (currencyHave, currencyNeed) => (dispatch, _getState, api) => {
//   dispatch(ActionCreator.requestCourse());

// return (
//   api.get(`${Url.COURSE_HISTORY}${currencyHave},${currencyNeed}`)
//     .then(({data}) => dispatch(ActionCreator.loadCourseToday(data.rates.RUB)))
//     .catch(() => dispatch(ActionCreator.failureCourse()))
// );
// };
