import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Grid, Row, Col } from "react-flexbox-grid";
// import styled from "styled-components";
import MediaQuery from "react-responsive";
import Header from "./Header";
import TopDestinations from "./TopDestinations";
import TopPrices from "./TopPrices";
import AgencySlider from "./AgencySlider";
import SpecialPrices from "./SpecialPrices";
import Info from "./Info";
import MobApp from "./MobApp";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="home-page_wrapper">
        <Header />
        <TopDestinations />
        <TopPrices />
        <MediaQuery minWidth={577}>
          <AgencySlider className="agency-slider" />
        </MediaQuery>
        <SpecialPrices />
        <Info />
        <MobApp />
        <Footer />
      </div>
    );
  }
}

export default Home;
