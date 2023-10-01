import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getStaff,
  getSingleStaff,
  addStaff,
  updateStaff,
  deleteStaff,
} from './actions';
import axiosInstance from "@/configs/axiosIntance";

// Staff Sagas
function* fetchStaffSaga({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/staffs', payload));
    const staffList = response.data; // Assuming the staff data is in response.data
    yield put(getStaff.success(staffList));
  } catch (error) {
    yield put(getStaff.failure(error.message));
  }
}

function* fetchSingleStaffSaga(action) {
  try {
    const { id } = action.payload;
    const staff = yield call(() => axiosInstance.get(`/staffs/${id}`, action.payload));
    yield put(getSingleStaff.success(staff.singleStaff));
  } catch (error) {
    yield put(getSingleStaff.failure(error.message));
  }
}

function* addStaffSaga(action) {
  try {
    const newStaff = yield call(() => axiosInstance.post('/staffs', action.payload));
    yield put(addStaff.success(newStaff));
  } catch (error) {
    yield put(addStaff.failure(error.message));
  }
}

function* updateStaffSaga (action) {
  const {id,data} = action.payload;
  try {
    const updatedStaff = yield call(() => axiosInstance.put(`/staffs/${id}`, data));
    yield put(updateStaff.success(updatedStaff));
  } catch (error) {
    yield put(updateStaff.failure(error.message));
  }
}

function* deleteStaffSaga(action) {
  try {
    const { payload: staffId } = action; // Extract the staffId from the payload
    yield call(() => axiosInstance.delete(`/staffs/${staffId}`));
    yield put(deleteStaff.success(staffId));
  } catch (error) {
    yield put(deleteStaff.failure(error.message));
  }
}

// Staff Watcher Saga
export function* staffSaga() {
  yield takeLatest(getStaff.request, fetchStaffSaga);
  yield takeLatest(getSingleStaff.request, fetchSingleStaffSaga);
  yield takeLatest(addStaff.request, addStaffSaga);
  yield takeLatest(updateStaff.request, updateStaffSaga);
  yield takeLatest(deleteStaff.request, deleteStaffSaga);
}
