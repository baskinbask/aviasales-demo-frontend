import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
// import FlexWrapper from "../common/FlexWrapper";
import SearchHeader from "./SearchHeader";
import Footer from "../Footer";

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <Footer />
      </div>
    );
  }
}

export default Search;
