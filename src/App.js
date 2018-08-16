import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Grid, Row, Col } from "react-flexbox-grid";
// import styled from "styled-components";
import "./AgencySlider/slick.css";
import "./AgencySlider/slick-theme.css";
import "./App.css";
import Home from "./Home";
import Search from "./SearchPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app_wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
