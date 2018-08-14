import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import MediaQuery from "react-responsive";
// import FlexWrapper from "../common/FlexWrapper";
import SearchHeader from "./SearchHeader";
import Filter from "./Filter";
import Card from "./Card";
import CardMob from "./CardMob";
import Footer from "../Footer";
import cards from "./cardsArr";
import filter from "./icons/filter.svg";

const Content = styled.section`
  padding: 56px 0 40px;
  background: #eaeaea;

  @media (max-width: 768px) {
    padding-top: 0;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
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

const ButtonFilterIcon = styled.button`
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

const ButtonFilter = ButtonMore.extend`
  width: initial;
  margin-bottom: 16px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 10px 24px;
  border-radius: 100px;
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
        <Helmet>
          <title>Aviasales | Search</title>
        </Helmet>
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
                <ButtonFilterIcon />
              </Row>
            </MediaQuery>
            <Row>
              <Col xl={3} lg={4}>
                <MediaQuery minWidth={993}>
                  <Filter />
                </MediaQuery>
              </Col>
              <Col xl={7} lg={8} xs={12}>
                <MediaQuery maxWidth={576}>
                  <CardMob
                    {...cards[0]}
                    title="Самый дешёвый"
                    colorBg="#83D40B"
                  />
                  <CardMob
                    {...cards[1]}
                    title="Самый быстрый"
                    colorBg="#AF7542"
                  />
                  <CardMob
                    {...cards[2]}
                    title="Лучший билет"
                    colorBg="#C279D1"
                  />
                  {cards.map(card => (
                    <CardMob {...card} />
                  ))}
                  <ButtonFilter>Фильтровать</ButtonFilter>
                </MediaQuery>
                <MediaQuery minWidth={577}>
                  {cards.map(card => (
                    <Card {...card} />
                  ))}
                  <ButtonMore>Показать еще 10 билетов!</ButtonMore>
                </MediaQuery>
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
