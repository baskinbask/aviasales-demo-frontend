import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Header />
      </div>
    );
  }
}

export default App;
