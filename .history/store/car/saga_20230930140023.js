import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar,
} from './actions';
import axiosInstance from '@/configs/axiosIntance';

function* handleGetCars({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/cars', payload));
    yield put(getCars.success(response.data));
  } catch (error) {
    yield put(getCars.failure(error.message));
  }
}

function* handleGetCar(action) {
  try {
    const car = yield call(() => axiosInstance.get('/car/first', action.payload));
    yield put(getCar.success(car));
  } catch (error) {
    yield put(getCar.failure(error.message));
  }
}
function* handleUpdateCar(action) {
  try {
    const {id} = action.payload;
    const { payload: updatedCarData } = action; // Extract the updated car data from the payload
    const updatedCar = yield call(() => axiosInstance.put(`/cars/${updatedCarData.id}`, action));
    yield put(updateCar.success(updatedCar));
  } catch (error) {
    yield put(updateCar.failure(error.message));
  }
}
function* handleAddCar(action) {
  try {
    const newCar = yield call(() => axiosInstance.post('/cars', action.payload));
    yield put(addCar.success(newCar));
  } catch (error) {
    // yield put(addCar.failure(error.message));
  }
}

function* handleDeleteCar(action) {
  try {
    const { payload: carId } = action; // Extract the carId from the payload
    yield call(() => axiosInstance.delete(`/cars/${carId}`));
    yield put(deleteCar.success(carId));
  } catch (error) {
    yield put(deleteCar.failure(error.message));
  }
}

export default function* carSaga() {
  yield takeLatest(getCars.request, handleGetCars);
  yield takeLatest(getCar.request, handleGetCar);
  yield takeLatest(addCar.request, handleAddCar);
  yield takeLatest(updateCar.request, handleUpdateCar);
  yield takeLatest(deleteCar.request, handleDeleteCar);
}
