import {
  CREATE_EVENT_FAILED,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_RESET,
  CREATE_EVENT_SUCCESS,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_FAILED,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_RESET,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILED,
  GET_ALL_EVENTS_RESET,
} from "../constants/eventConstants";

export const createEventReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return { loading: true };

    case CREATE_EVENT_SUCCESS:
      return { loading: false, success: true, event: action.payload };

    case CREATE_EVENT_FAILED:
      return { loading: false, error: action.payload };

    case CREATE_EVENT_RESET:
      return {};

    default:
      return state;
  }
};

export const updateEventReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case UPDATE_EVENT_REQUEST:
      return { loading: true };

    case UPDATE_EVENT_SUCCESS:
      return { loading: false, success: true, event: action.payload };

    case UPDATE_EVENT_FAILED:
      return { loading: false, error: action.payload };

    case UPDATE_EVENT_RESET:
      return { event: {} };

    default:
      return state;
  }
};

export const getAllEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS_REQUEST:
      return { loading: true };

    case GET_ALL_EVENTS_SUCCESS:
      return { loading: false, success: true, events: action.payload };

    case GET_ALL_EVENTS_FAILED:
      return { loading: false, error: action.payload };

    case GET_ALL_EVENTS_RESET:
      return {};

    default:
      return state;
  }
};
