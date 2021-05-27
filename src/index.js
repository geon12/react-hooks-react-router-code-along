import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"


ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
); 