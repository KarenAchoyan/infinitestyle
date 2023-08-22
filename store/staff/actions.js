import {createAction} from "redux-actions";

export const getStaff = {
  request: createAction('GET_STAFF_REQUEST'),
  success: createAction('GET_STAFF_SUCCESS'),
  failure: createAction('GET_STAFF_FAILURE'),
};

export const getSingleStaff = {
  request: createAction('GET_SINGLE_STAFF_REQUEST'),
  success: createAction('GET_SINGLE_STAFF_SUCCESS'),
  failure: createAction('GET_SINGLE_STAFF_FAILURE'),
};

export const addStaff = {
  request: createAction('ADD_STAFF_REQUEST'),
  success: createAction('ADD_STAFF_SUCCESS'),
  failure: createAction('ADD_STAFF_FAILURE'),
};

export const updateStaff = {
  request: createAction('UPDATE_STAFF_REQUEST'),
  success: createAction('UPDATE_STAFF_SUCCESS'),
  failure: createAction('UPDATE_STAFF_FAILURE'),
};

export const deleteStaff = {
  request: createAction('DELETE_STAFF_REQUEST'),
  success: createAction('DELETE_STAFF_SUCCESS'),
  failure: createAction('DELETE_STAFF_FAILURE'),
};
