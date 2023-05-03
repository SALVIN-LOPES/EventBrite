import React, { useEffect } from "react";
import { getAllEvents } from "../actions/eventActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ListAllEventsScreen = () => {
  const dispatch = useDispatch();

  const allevents = useSelector((state) => state.allevents);
  const {
    loading: loadingAllEvents,
    success: successAllEvents,
    error: errorAllEvents,
    events,
  } = allevents;

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <div>
      <h1>All events</h1>
      {loadingAllEvents ? (
        <Loader />
      ) : errorAllEvents ? (
        <Message variant="danger">{errorAllEvents}</Message>
      ) : (
        <>
          {events?.map((event) => (
            <div class="card text-bg-dark">
              <img src="..." class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h5 class="card-title">{event.event_name}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListAllEventsScreen;
