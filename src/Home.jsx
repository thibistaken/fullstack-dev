import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Events from "./Events.jsx";
export default function Home() {
  return (
    <>
      <div>Hello, welcome!</div>
      <Route exact path="/" component={Home} />
      <Route path="/events" component={Events} />
      {/* <Route path="/create" component={Create} /> */}
    </>
  );
}
