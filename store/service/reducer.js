import { handleActions } from 'redux-actions';
import {
  getServices,
  getService,
  addService,
  updateService,
  deleteService,
} from './actions';

const initialState = {
  services: [],
  selectedService: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const serviceReducer = handleActions(
  {
    [getServices.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getServices.success]: (state, { payload }) => ({
      ...state,
      services: payload,
      isFetching: false,
    }),
    [getServices.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),

    [getService.request]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [getService.success]: (state, { payload }) => ({
      ...state,
      selectedService: payload,
      isFetching: false,
    }),
    [getService.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),

    [addService.request]: (state) => ({
      ...state,
      isAdding: true,
      error: null,
    }),
    [addService.success]: (state, { payload }) => ({
      ...state,
      services: [...state.services, payload],
      isAdding: false,
    }),
    [addService.failure]: (state, { payload }) => ({
      ...state,
      isAdding: false,
      error: payload,
    }),

    [updateService.request]: (state) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    [updateService.success]: (state, { payload }) => ({
      ...state,
      services: state.services.map((service) =>
        service.id === payload.id ? payload : service
      ),
      isUpdating: false,
    }),
    [updateService.failure]: (state, { payload }) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),

    [deleteService.request]: (state) => ({
      ...state,
      isDeleting: true,
      error: null,
    }),
    [deleteService.success]: (state, { payload }) => ({
      ...state,
      services: state.services.filter((service) => service.id !== payload),
      isDeleting: false,
    }),
    [deleteService.failure]: (state, { payload }) => ({
      ...state,
      isDeleting: false,
      error: payload,
    }),
  },
  initialState
);

export default serviceReducer;
