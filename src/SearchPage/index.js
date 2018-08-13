import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import MediaQuery from "react-responsive";
// import FlexWrapper from "../common/FlexWrapper";
import SearchHeader from "./SearchHeader";
import Filter from "./Filter";
import Card from "./Card";
import Footer from "../Footer";
import cards from "./cardsArr";
import filter from "./icons/filter.svg";

const Content = styled.section`
  padding: 56px 0 40px 0;
  background: #eaeaea;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const ButtonUp = styled.button`
  margin: 8px 0 16px;
  width: 88px;
  height: 28px;
  background: #00ace2;
  opacity: 0.5;
  border: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

const ButtonFilter = styled.button`
  margin: 16px 0;
  width: 66px;
  height: 48px;
  border-radius: 10px;
  border: none;
  background: #23a9f6 url(${filter}) 50% 50% no-repeat;
  cursor: pointer;
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

const FluidGrid = styled(Grid)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <Content>
          <FluidGrid>
            <MediaQuery maxWidth={576}>
              <Row center="xs">
                <ButtonUp>Наверх</ButtonUp>
              </Row>
            </MediaQuery>
            <MediaQuery minWidth={577} maxWidth={768}>
              <Row center="xs">
                <ButtonFilter />
              </Row>
            </MediaQuery>
            <Row>
              <Col lg={3}>
                <MediaQuery minWidth={993}>
                  <Filter />
                </MediaQuery>
              </Col>
              <Col lg={7}>
                {cards.map(card => (
                  <Card {...card} />
                ))}
                <ButtonMore>Показать еще 10 билетов!</ButtonMore>
              </Col>
            </Row>
          </FluidGrid>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Search;
