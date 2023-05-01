import React from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
// import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  const userInfo = true;
  // userInfo.isAdmin = true;

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
                <NavDropdown title={"salvin lopes"} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={""}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {/* <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to={`/admin/userlist/`}>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to={`/admin/productlist/`}>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to={`/admin/orderlist/`}>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
