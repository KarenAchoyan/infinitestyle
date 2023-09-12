import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getServices,
  getService,
  addService,
  updateService,
  deleteService,
} from './actions'; // Import your service-related actions
import axiosInstance from '@/configs/axiosIntance';

function* handleGetServices({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/services', payload));
    yield put(getServices.success(response.data));
  } catch (error) {
    yield put(getServices.failure(error.message));
  }
}

function* handleGetService(action) {
  try {
    const {id} = action.payload;
    const service = yield call(() => axiosInstance.get(`/services/${id}`, action.payload));
    yield put(getService.success(service));
  } catch (error) {
    yield put(getService.failure(error.message));
  }
}

function* handleAddService(action) {
  try {
    const newService = yield call(() => axiosInstance.post('/services', action.payload));
    yield put(addService.success(newService));
  } catch (error) {
    // yield put(addService.failure(error.message));
  }
}
function* updateServiceSaga(action) {
    try {
      const {id} = action.payload;
  
      const updatedCategory = yield call(() => axiosInstance.put(`/services/${id}`, action.payload));
      yield put(updateCategory.success(updatedCategory));
    } catch (error) {
      yield put(updateCategory.failure(error.message));
    }
  }

function* handleDeleteService(action) {
  try {
    const { payload: serviceId } = action; // Extract the serviceId from the payload
    yield call(() => axiosInstance.delete(`/services/${serviceId}`));
    yield put(deleteService.success(serviceId));
  } catch (error) {
    yield put(deleteService.failure(error.message));
  }
}

export default function* serviceSaga() {
  yield takeLatest(getServices.request, handleGetServices);
  yield takeLatest(getService.request, handleGetService);
  yield takeLatest(addService.request, handleAddService);
  yield takeLatest(updateService.request, updateServiceSaga);
  yield takeLatest(deleteService.request, handleDeleteService);
}
