import { createAction } from 'redux-actions';

export const getCars = {
  request: createAction('GET_CARS_REQUEST'),
  success: createAction('GET_CARS_SUCCESS'),
  failure: createAction('GET_CARS_FAILURE'),
};

export const getCar = {
  request: createAction('GET_CAR_REQUEST'),
  success: createAction('GET_CAR_SUCCESS'),
  failure: createAction('GET_CAR_FAILURE'),
};

export const addCar = {
  request: createAction('ADD_CAR_REQUEST'),
  success: createAction('ADD_CAR_SUCCESS'),
  failure: createAction('ADD_CAR_FAILURE'),
};

export const updateCar = {
  success: createAction('UPDATE_CAR_SUCCESS'),
  failure: createAction('UPDATE_CAR_FAILURE'),
  request: createAction('UPDATE_CAR_REQUEST'),
};

export const deleteCar = {
  success: createAction('DELETE_CAR_SUCCESS'),
  failure: createAction('DELETE_CAR_FAILURE'),
  request: createAction('DELETE_CAR_REQUEST'),
};
