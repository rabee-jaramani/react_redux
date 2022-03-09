import { ADD_CAR, UPDATE_ADMIN, UPDATE_DATE } from './constants';

export const updateAdmin = (admin) => (dispatch) => {
  dispatch({ type: UPDATE_ADMIN, payload: admin });
};

export const updateDate = (date) => (dispatch) => {
  dispatch({ type: UPDATE_DATE, payload: date });
};

export const addCar = (car) => (dispatch) => {
  dispatch({ type: ADD_CAR, payload: car });
};
