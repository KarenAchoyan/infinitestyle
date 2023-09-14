import {createAction} from "redux-actions";

export const getContact = {
  request: createAction('GET_CONTACT_REQUEST'),
  success: createAction('GET_CONTACT_SUCCESS'),
  failure: createAction('GET_CONTACT_FAILURE'),
};

export const updateContact = {
  request: createAction('UPDATE_CONTACT_REQUEST'),
  success: createAction('UPDATE_CONTACT_SUCCESS'),
  failure: createAction('UPDATE_CONTACT_FAILURE'),
};

export const insertContact = {
  request: createAction('ADD_CONTACT_REQUEST'),
  success: createAction('ADD_CONTACT_SUCCESS'),
  failure: createAction('ADD_CONTACT_FAILURE'),
};

export const getAllContacts = {
  request: createAction('GET_ALL_CONTACTS_REQUEST'),
  success: createAction('GET_ALL_CONTACTS_SUCCESS'),
  failure: createAction('GET_ALL_CONTACTS_FAILURE'),
};

export const deleteContact = {
  request: createAction('DELETE_CONTACT_REQUEST'),
  success: createAction('DELETE_CONTACT_SUCCESS'),
  failure: createAction('DELETE_CONTACT_FAILURE'),
};