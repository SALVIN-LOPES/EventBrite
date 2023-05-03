import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { createEvent } from "../actions/eventActions";
import { CREATE_EVENT_RESET } from "../constants/eventConstants";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const eventCreate = useSelector((state) => state.eventCreate);
  const {
    loading: eventCreateLoading,
    success: eventCreateSuccess,
    error: eventCreateError,
    event,
  } = eventCreate;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: CREATE_EVENT_RESET });

    if (!userInfo) {
      navigate("/login");
    }

    if (eventCreateSuccess) {
      // redirect to the edit screen of the event
      navigate(`/event/${event._id}/create`);
    }
  }, [event, eventCreateSuccess, navigate, userInfo]);

  const createEventHandler = () => {
    dispatch(createEvent());
    console.log("Event created successfully!!");
  };

  const deleteUserHandler = () => {
    dispatch(logout());
    navigate("/login");
    console.log("user logout successfully!!");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>EventBrite</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search box added to navigation */}
            <SearchBox />

            <Nav className="ml-auto">
              <LinkContainer to="/allevents">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Global
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/myevents">
                <Nav.Link>
                  <i className="fas fa-user"></i>Local
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.username} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={deleteUserHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}

              <Col className="text-right">
                <Button className="my-3" onClick={createEventHandler} S>
                  <i className="fas fa-plus"></i> Create Event
                </Button>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
