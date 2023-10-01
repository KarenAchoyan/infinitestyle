import {takeLatest, put, call} from 'redux-saga/effects';
import {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} from './actions';
import axiosInstance from '@/configs/axiosIntance';

function* handleGetReviews({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/reviews', payload));
    yield put(getReviews.success(response.data));
  } catch (error) {
    yield put(getReviews.failure(error.message));
  }
}

function* handleGetReview(action) {
  try {
    // const review = yield call(api.getReview, action.payload);
    // yield put(getReview.success(review));
  } catch (error) {
    // yield put(getReview.failure(error.message));
  }
}

function* handleAddReview(action) {
  try {
    const newReview = yield call(() => axiosInstance.post('/reviews', action.payload));
    yield put(addReview.success(newReview));
  } catch (error) {
    // yield put(addReview.failure(error.message));
  }
}

function* handleUpdateReview(action) {
  try {
    const { id, values } = action.payload; // Extract id and values from the payload
    const updatedReview = yield call(() =>
      axiosInstance.put(`/reviews/${id}`, values) // Send values directly in the request body
    );
    yield put(updateReview.success(updatedReview));
  } catch (error) {
    // Handle the error if needed
    // yield put(updateReview.failure(error.message));
  }
}

function* handleDeleteReview(action) {
  try {
    const {payload: reviewId} = action; // Extract the reviewId from the payload
    yield call(() => axiosInstance.delete(`/reviews/${reviewId}`));
    yield put(deleteReview.success(reviewId));
  } catch (error) {
    yield put(deleteReview.failure(error.message));
  }
}

export default function* reviewSaga() {
  yield takeLatest(getReviews.request, handleGetReviews);
  yield takeLatest(getReview.request, handleGetReview);
  yield takeLatest(addReview.request, handleAddReview);
  yield takeLatest(updateReview.request, handleUpdateReview);
  yield takeLatest(deleteReview.request, handleDeleteReview);
}
