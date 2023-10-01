import { handleActions } from 'redux-actions';
import {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} from './actions';

const initialState = {
  reviews: [],
  selectedReview: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const reviewReducer = handleActions(
  {
    [getReviews]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getReviews.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getReviews.success]: (state, { payload }) => ({
      ...state,
      reviews: payload,
      isFetching: false,
    }),

    [getReviews.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),



    [getReview.success]: (state, { payload }) => ({
      ...state,
      selectedReview: payload,
      isFetching: false,
    }),
    [getReview]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [addReview]: (state) => ({
      ...state,
      isAdding: true,
      error: null,
    }),
    [getReview.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [addReview.request]: (state) => ({
      ...state,
      isAdding: true,
      error: null,
    }),
    [updateReview.request]: (state) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    [deleteReview.request]: (state) => ({
      ...state,
      isDeleting: true,
      error: null,
    }),

    [addReview.success]: (state, { payload }) => ({
      ...state,
      reviews: [...state.reviews, payload],
      isAdding: false,
    }),
    [updateReview.success]: (state, { payload }) => {
debugger
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === payload.id ? payload : review
        ),
        isUpdating: false,
      }
    },
    [deleteReview.success]: (state, { payload }) => ({
      ...state,
      reviews: state.reviews.filter((review) => review.id !== payload),
      isDeleting: false,
    }),
    [getReview.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [addReview.failure]: (state, { payload }) => ({
      ...state,
      isAdding: false,
      error: payload,
    }),
    [updateReview.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    [deleteReview.failure]: (state, { payload }) => ({
      ...state,
      isDeleting: false,
      error: payload,
    }),
  },
  initialState
);

export default reviewReducer;
