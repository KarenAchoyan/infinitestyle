import { handleActions } from 'redux-actions';
import {
  getStaff,
  getSingleStaff,
  addStaff,
  updateStaff,
  deleteStaff,
} from './actions';

const initialState = {
  staffList: [],
  selectedStaff: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const staffReducer = handleActions(
  {
    [getStaff]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getSingleStaff]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [addStaff]: (state) => ({
      ...state,
      isAdding: true,
      error: null,
    }),
    [updateStaff]: (state) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    [deleteStaff]: (state) => ({
      ...state,
      isDeleting: true,
      error: null,
    }),
    [getStaff.success]: (state, { payload }) => ({
      ...state,
      staffList: payload,
      isFetching: false,
    }),
    [getSingleStaff.success]: (state, { payload }) => ({
      ...state,
      selectedStaff: payload,
      isFetching: false,
    }),
    [addStaff.success]: (state, { payload }) => ({
      ...state,
      staffList: [...state.staffList, payload],
      isAdding: false,
    }),
    [updateStaff.success]: (state, { payload }) => ({
      ...state,
      staffList: state.staffList.map((staff) =>
        staff.id === payload.id ? payload : staff
      ),
      isUpdating: false,
    }),
    [deleteStaff.success]: (state, { payload }) => ({
      ...state,
      staffList: state.staffList.filter((staff) => staff.id !== payload),
      isDeleting: false,
    }),
    [getStaff.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getSingleStaff.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [addStaff.failure]: (state, { payload }) => ({
      ...state,
      isAdding: false,
      error: payload,
    }),
    [updateStaff.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    [deleteStaff.failure]: (state, { payload }) => ({
      ...state,
      isDeleting: false,
      error: payload,
    }),
  },
  initialState
);

export default staffReducer;
