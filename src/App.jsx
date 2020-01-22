import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Events from "./Events.jsx";
import Create from "./Create.jsx";
import { useSelector } from "react-redux";

export default function App(props) {
  const username = useSelector(state => state.username);

  return (
    <>
      {username ? (
        <Home />
      ) : (
        <div>
          <Signup /> <Login />
        </div>
      )}

      <Link to="/">Go home</Link>
      <Link to="/events">View events</Link>
      <Link to="/create">Create an event</Link>
    </>
  );
}
