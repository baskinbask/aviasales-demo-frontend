import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Button from "./Button";

const ButtonLink = props => (
  <Router>
    <Button
      to={props.to}
      type={props.type}
      value={props.value}
      icon={props.icon}
    />
  </Router>
);

export default ButtonLink;
