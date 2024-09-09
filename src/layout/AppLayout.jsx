import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate, Link } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="black" className="navbar-container">
        <Container fluid>
          <Navbar.Brand href="/">
            <img height={30} className="m-1" src="https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Menu Items */}
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
              <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
              <Nav.Link as={Link} to="/flights" disabled>Flights</Nav.Link>
            </Nav>

            {/* Login */} 
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/signin">Sign in</Nav.Link>
              <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/account">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/account/settings">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> 
    </div>
  );
};

export default AppLayout;