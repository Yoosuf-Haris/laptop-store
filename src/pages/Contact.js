import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './FormStyles.css';

const Contact = () => {
  return (
    <div className="custom-form-container">
      <h1 className="form-title">Contact Us</h1>
      <Form className="custom-form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit" className="custom-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
