import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './FormStyles.css';

const SignUp = () => {
  return (
    <Container className="mt-4">
        <div className="custom-form-container">
        <h1 className="form-title">Sign up</h1>
      <Form className="custom-form">

      <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPasswordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="custom-button">
        Sign Up
      </Button>
    </Form>
    </div>
    </Container>
  );
};

export default SignUp;
