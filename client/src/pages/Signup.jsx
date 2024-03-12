// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { ADD_USER } from "../utils/mutations";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Authentication from "../utils/auth";
export default function Signup() {
  // set use state and use mutation to fit what we have on backend
  const [signupState, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, {error, data}] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignup({
      ...signupState,
      [name]: value,
    });
  };

  const submission = async (event) => {
    event.preventDefault();
    console.log(signupState);

    try {
      const { data } = await addUser({
        variables: { ...signupState },
      });

      Authentication.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Form onSubmit={submission}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control name= "username" value={signupState.username} onChange={handleChange} defaultValue="Username" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
            name = "email"
            value = {signupState.email}
              onChange={handleChange}
              type="email"
              defaultValue="email@example.com"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
            name= "password"
            value ={signupState.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <button
          className="btn btn-block btn-primary"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Signup
        </button>
      </Form>
    </Container>
  );
}
