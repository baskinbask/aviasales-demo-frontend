import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
// import FlexWrapper from "../common/FlexWrapper";
import SearchHeader from "./SearchHeader";
import Card from "./Card";
import Footer from "../Footer";
import cards from "./cardsArr";

const Content = styled.section`
  padding: 56px 0 40px 0;
  background: #eaeaea;
`;

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <Content>
          <Grid>
            <Row>
              <Col lg={7}>{cards.map(card => <Card {...card} />)}</Col>
            </Row>
          </Grid>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Search;
