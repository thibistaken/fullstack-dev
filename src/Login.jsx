import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("Current username", username);
  console.log("Current password", password);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("req sent to /signup endpoint");
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    const response = await fetch("/login", { method: "POST", body: data });
    const body = await response.json();
    console.log("res received from server", body);
    if (body.success) {
      dispatch({ type: "LOGIN_SUCCESS", payload: username });
    }
    alert(body.message);
  }
  return (
    <div>
      <Form>
        <h2>Log In</h2>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={event => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => handleSubmit(event)}
        >
          Log in
        </Button>
      </Form>
    </div>
  );
}
