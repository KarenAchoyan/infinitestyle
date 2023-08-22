import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getContact,
  updateContact,
} from './actions';
import axiosInstance from "@/configs/axiosIntance";

// Contact Sagas
function* fetchContactSaga() {
  try {
    const response = yield call(() => axiosInstance.get('/contact/get'));
    const contact = response.data.contact; // Assuming the contact data is in response.data.contact
    yield put(getContact.success(contact));
  } catch (error) {
    yield put(getContact.failure(error.message));
  }
}

function* updateContactSaga(action) {
  try {
    const updatedContact = yield call(() => axiosInstance.post('/contact/update', action.payload));
    yield put(updateContact.success(updatedContact));
  } catch (error) {
    yield put(updateContact.failure(error.message));
  }
}

// Contact Watcher Saga
export function* contactSaga() {
  yield takeLatest(getContact.request, fetchContactSaga);
  yield takeLatest(updateContact.request, updateContactSaga);
}
