import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './FormStyles.css';

const SignIn = () => {
  return (
    <Container className="mt-4">
      <div className="custom-form-container">
      <h1 className="form-title">Sign In</h1>
      <Form className="custom-form">
        <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="custom-button">
          Sign In
        </Button>
      </Form>
    </div>
    </Container>
  );
};

export default SignIn;
