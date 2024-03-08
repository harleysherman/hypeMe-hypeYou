// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function Signup(){
    // set use state and use mutation to fit what we have on backend
  




    return (
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="Username" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" defaultValue="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
}