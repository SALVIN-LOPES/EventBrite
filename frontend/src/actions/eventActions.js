import axios from "axios";
import {
  CREATE_EVENT_FAILED,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_RESET,
  CREATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILED,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_RESET,
  UPDATE_EVENT_SUCCESS,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILED,
  GET_ALL_EVENTS_RESET,
} from "../constants/eventConstants";

export const createEvent = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_EVENT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/events/create/`, {}, config);

    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateEvent = (event) => async (dispatch, getState) => {
  // event = {
  //     _id,
  //     event_name,
  //     description,
  //     image,
  //     location
  // }
  try {
    dispatch({ type: UPDATE_EVENT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/events/update/${event._id}/`,
      event,
      config
    );
    console.log("event update data = ", data);

    dispatch({
      type: UPDATE_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EVENT_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getAllEvents = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/events/`, config);
    console.log("event update data = ", data);

    dispatch({
      type: GET_ALL_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_EVENTS_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
