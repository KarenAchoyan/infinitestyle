import { createAction } from 'redux-actions';

export const getServices = {
  request: createAction('GET_SERVICES_REQUEST'),
  success: createAction('GET_SERVICES_SUCCESS'),
  failure: createAction('GET_SERVICES_FAILURE'),
};

export const getService = {
  request: createAction('GET_SERVICE_REQUEST'),
  success: createAction('GET_SERVICE_SUCCESS'),
  failure: createAction('GET_SERVICE_FAILURE'),
};

export const addService = {
  request: createAction('ADD_SERVICE_REQUEST'),
  success: createAction('ADD_SERVICE_SUCCESS'),
  failure: createAction('ADD_SERVICE_FAILURE'),
};

export const updateService = {
  success: createAction('UPDATE_SERVICE_SUCCESS'),
  failure: createAction('UPDATE_SERVICE_FAILURE'),
  request: createAction('UPDATE_SERVICE_REQUEST'),
};

export const deleteService = {
  success: createAction('DELETE_SERVICE_SUCCESS'),
  failure: createAction('DELETE_SERVICE_FAILURE'),
  request: createAction('DELETE_SERVICE_REQUEST'),
};
