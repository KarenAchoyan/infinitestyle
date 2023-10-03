// reducer.js

import { handleActions } from 'redux-actions';
import {
  getContact,
  getAllContacts,
  updateContact,
  deleteContact,
  insertContact, // Add the new insertContact action
} from './actions';

const initialState = {
  contact: null,
  contacts: [], // Add a new state property for storing all contacts
  isFetching: false,
  isUpdating: false,
  isDeleting: false,
  isInserting: false, // Add a new state property for insert operation
  error: null,
};

const contactReducer = handleActions(
  {
    [getContact.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getAllContacts.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [updateContact.request]: (state) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    [deleteContact.request]: (state) => ({
      ...state,
      isDeleting: true,
      error: null,
    }),
    [insertContact.request]: (state) => ({
      ...state,
      isInserting: true, // Set isInserting to true when inserting data
      error: null,
    }),
    [getContact.success]: (state, { payload }) => ({
      ...state,
      contact: payload,
      isFetching: false,
    }),
    [getAllContacts.success]: (state, { payload }) => ({
      ...state,
      contacts: payload,
      isFetching: false,
    }),
    [updateContact.success]: (state, { payload }) => ({
      ...state,
      contact: payload,
      isUpdating: false,
    }),
    [deleteContact.success]: (state) => ({
      ...state,
      contacts:state.contacts.filter((category) => category.id !== payload),
      isDeleting: false,
    }),
    [insertContact.success]: (state) => ({
      ...state,
      isInserting: false, // Set isInserting to false when insert is successful
    }),
    [getContact.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getAllContacts.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [updateContact.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    [deleteContact.failure]: (state, { payload }) => ({
      ...state,
      isDeleting: false,
      error: payload,
    }),
    [insertContact.failure]: (state, { payload }) => ({
      ...state,
      isInserting: false, // Set isInserting to false on insert failure
      error: payload,
    }),
  },
  initialState
);

export default contactReducer;
