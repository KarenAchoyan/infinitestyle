import { handleActions } from 'redux-actions';
import {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from './actions';

const initialState = {
  categories: [],
  selectedCategory: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const categoryReducer = handleActions(
  {
    [getCategories.success]: (state, { payload }) => ({
      ...state,
      categories: payload,
      isFetching: false,
    }),
    [getCategory.success]: (state, { payload }) => ({
      ...state,
      selectedCategory: payload,
      isFetching: false,
    }),
    [addCategory.success]: (state, { payload }) => ({
      ...state,
      categories: [...state.categories, payload],
      isAdding: false,
    }),
    [updateCategory.success]: (state, { payload }) => ({
      ...state,
      categories: state.categories.map((category) =>
        category.id === payload.id ? payload : category
      ),
      isUpdating: false,
    }),
    [deleteCategory.success]: (state, { payload }) => ({
      ...state,
      categories: state.categories.filter((category) => category.id !== payload),
      isDeleting: false,
    }),
    [getCategories.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getCategory.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [addCategory.failure]: (state, { payload }) => ({
      ...state,
      isAdding: false,
      error: payload,
    }),
    [updateCategory.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    [deleteCategory.failure]: (state, { payload }) => ({
      ...state,
      isDeleting: false,
      error: payload,
    }),
  },
  initialState
);

export default categoryReducer;
