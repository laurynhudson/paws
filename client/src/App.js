import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/appointment" component={Appointment}></Route>
      </Switch>
    </Router>
  );
}

export default App;
