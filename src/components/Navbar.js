import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Form, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Make sure to install react-icons
import './NavbarStyles.css'; // Import the custom CSS

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mr-auto d-flex align-items-center gap-5">
          Laptop Store
          <Form inline className="d-flex align-items-center gap-2">
            <FaSearch className="text-light search-icon" />
            <FormControl type="text" placeholder="Search" className="search-bar" />
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> 
          </Nav>
          <Nav className="gap-2">
            <Button variant="outline-light" as={Link} to="/signin" className="mr-2">Sign In</Button>
            <Button variant="outline-light" as={Link} to="/signup">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
