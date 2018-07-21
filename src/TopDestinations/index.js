import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import Logo from "./Logo";
import editIcon from "./img/icons/edit.svg";
import { catProps } from "./Category";
import Category from "./Category";
import { cards } from "../common/cardsArr";
import Card from "./Card";

const WrapperBg = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 56px;
  background: #f8fcff;
`;

const Title = styled.h3`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 55px;
  font-weight: 500;
  line-height: 36px;
  font-size: 24px;
  color: #4a4a4a;
  text-align: center;

  & span {
    color: #00ace2;
  }
`;

class TopDestinations extends React.Component {
  render() {
    return (
      <WrapperBg>
        <Grid>
          <Row center="xl">
            <Col xl={6}>
              <Logo />
              <Title>
                Популярные направления перелетов<br /> из города
                <span> Москва </span>
                <img src={editIcon} alt="" />
              </Title>
            </Col>
          </Row>
          <Row center="xl">
            <Col xl={6}>
              <FlexWrapper
                className="top-destinations_category"
                d="flex"
                jc="space-between"
              >
                {catProps.map(item => (
                  <Category
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    active={item.active}
                  />
                ))}
              </FlexWrapper>
            </Col>
          </Row>
          <Row center="xl">
            <Col xl={10}>
              <FlexWrapper
                className="top-destinations_cards"
                d="flex"
                wrap="wrap"
              >
                {cards.map(card => (
                  <Card
                    key={card.id}
                    country={card.country}
                    city={card.city}
                    photo={card.photo}
                    photo2x={card.photo2x}
                    price={card.price}
                    date={card.date}
                  />
                ))}
              </FlexWrapper>
            </Col>
          </Row>
        </Grid>
      </WrapperBg>
    );
  }
}

export default TopDestinations;
