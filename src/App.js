import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import "./App.css";
import Header from "./Header";
import TopDestinations from "./TopDestinations";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Header />
        <TopDestinations />
      </div>
    );
  }
}

export default App;
