import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance, { handleHeaders } from "configs/axiosIntance";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "./actions";
function* login({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.post(`/auth/login`, payload));
    if (response.status === 200) {
      handleHeaders(response.data.data.accessToken);
      yield put(loginSuccess(response.data.data));
    } else {
      yield put(loginFailure(response?.response?.data?.message));
    }
  } catch (e) {
    yield put(loginFailure("Something went wrong"));
  }
}
export default function* authSaga() {
  yield takeLatest(loginRequest, login);
}