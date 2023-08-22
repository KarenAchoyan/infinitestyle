import { handleActions } from 'redux-actions';
import {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar,
} from './actions';

const initialState = {
  cars: [],
  selectedCar: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const carReducer = handleActions(
  {
    [getCars]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getCar]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [addCar]: (state) => ({
      ...state,
      isAdding: true,
      error: null,
    }),
    [updateCar]: (state) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    [deleteCar]: (state) => ({
      ...state,
      isDeleting: true,
      error: null,
    }),
    [getCars.success]: (state, { payload }) => ({
      ...state,
      cars: payload,
      isFetching: false,
    }),
    [getCar.success]: (state, { payload }) => ({
      ...state,
      selectedCar: payload,
      isFetching: false,
    }),
    [addCar.success]: (state, { payload }) => ({
      ...state,
      cars: [...state.cars, payload],
      isAdding: false,
    }),
    [updateCar.success]: (state, { payload }) => ({
      ...state,
      cars: state.cars.map((car) =>
        car.id === payload.id ? payload : car
      ),
      isUpdating: false,
    }),
    [deleteCar.success]: (state, { payload }) => ({
      ...state,
      cars: state.cars.filter((car) => car.id !== payload),
      isDeleting: false,
    }),
    [getCars.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getCar.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [addCar.failure]: (state, { payload }) => ({
      ...state,
      isAdding: false,
      error: payload,
    }),
    [updateCar.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    [deleteCar.failure]: (state, { payload }) => ({
      ...state,
      isDeleting: false,
      error: payload,
    }),
  },
  initialState
);

export default carReducer;
