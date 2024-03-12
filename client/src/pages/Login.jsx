import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import {useMutation} from "@apollo/client"
import { LOGIN_USER } from "../utils/mutations";
import Authentication from '../utils/auth'
export default function Login() {
  // set use state and use mutation to fit what we have on backend
const [loginState, setLogin] = useState({email: '', password: '' });
const [login] = useMutation(LOGIN_USER)

const handleChange = (event) => {
  const {name, value} = event.target;

  setLogin({
    ...loginState,
    [name]: value,
  });
}

const submission = async (event)=>{
  event.preventDefault();
  console.log(loginState);
  try{
    const {data} = await login({
      variables: {...loginState},
    })
    Authentication.login(data.login.token);
  } catch (e) {
    console.log(e);
  }

  setLogin ({
    email: '',
    password: '',
  });
}

  return (
    <Form onSubmit={submission}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control name= "email" onChange={handleChange} type="email" value={loginState.email} defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control name= "password" onChange={handleChange} value={loginState.password} type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button
      variant = "dark"
        className="btn btn-block btn-primary"
        style={{ cursor: "pointer" }}
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
}
