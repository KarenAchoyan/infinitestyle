import { handleActions } from 'redux-actions';
import {
  getContact,
  updateContact,
} from './actions';

const initialState = {
  contact: null,
  isFetching: false,
  isUpdating: false,
  error: null,
};

const contactReducer = handleActions(
  {
    [getContact.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [updateContact.request]: (state) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    [getContact.success]: (state, { payload }) => ({
      ...state,
      contact: payload,
      isFetching: false,
    }),
    [updateContact.success]: (state, { payload }) => ({
      ...state,
      contact: payload,
      isUpdating: false,
    }),
    [getContact.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [updateContact.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
  },
  initialState
);

export default contactReducer;
