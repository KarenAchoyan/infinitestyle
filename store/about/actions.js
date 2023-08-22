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
