import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../actions/eventActions";

const EventEditScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const [uploading, setUploading] = useState(false);

  const eventCreate = useSelector((state) => state.eventCreate);
  const {
    loading: eventCreateLoading,
    success: eventCreateSuccess,
    error: eventCreateError,
    event,
  } = eventCreate;

  useEffect(() => {
    if (eventCreateSuccess && event) {
      setName(event.event_name);
      setDescription(event.data);
      setImage(event.image);
      setLocation(event.location);
    }
  }, [event, eventCreateSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        _id: id,
        event_name: name,
        image: image,
        data: description,
        location: location,
      })
    );
    console.log("event created successfully!!");
  };

  const uploadFileHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("event_id", id);

    setUploading(true);

    // make the request
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        `/api/events/upload/`,
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }

    console.log("file = ", file);
  };

  //  20022001@Sc

  return (
    <div>
      <FormContainer>
        <h1>Create Event</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Username..."
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image..."
              value={image}
              onChange={(e) => setImage(e.target.value)}></Form.Control>

            <Form.Control
              controlId="formFile"
              label="Choose File"
              type="file"
              custom
              onChange={uploadFileHandler}
            />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}></Form.Control>
          </Form.Group>

          <Button className="mt-3" type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default EventEditScreen;
