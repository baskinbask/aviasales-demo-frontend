import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
// import FlexWrapper from "../common/FlexWrapper";
import SearchHeader from "./SearchHeader";
import Filter from "./Filter";
import Card from "./Card";
import Footer from "../Footer";
import cards from "./cardsArr";

const Content = styled.section`
  padding: 56px 0 40px 0;
  background: #eaeaea;
`;

const ButtonMore = styled.button`
  width: 100%;
  padding: 18px 0;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #00acde;
  border: none;
  border-radius: 4px;
`;

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <Content>
          <Grid>
            <Row>
              <Col lg={3}>
                <Filter />
              </Col>
              <Col lg={7}>
                {cards.map(card => (
                  <Card {...card} />
                ))}
                <ButtonMore>Показать еще 10 билетов!</ButtonMore>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Search;
