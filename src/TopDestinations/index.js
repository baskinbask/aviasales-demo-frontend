import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import mainIcon from "./icons/mainIcon.svg";
import editIcon from "./icons/edit.svg";
import Category from "./Category";
import { catProps } from "./Category";
import { cards } from "./cardsArr";
import Card from "./Card";

const WrapperBg = styled.div`
  padding-top: 56px;
  padding-bottom: 14px;
  background: #f8fcff;
`;

const IconStyled = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
  background: #e2f8ff;

  & img {
    margin-top: 50%;
    transform: translateY(-50%);
  }
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

  & a {
    color: #00ace2;
    text-decoration: none;

    & img {
      padding-left: 5px;
    }
  }

  @media (max-width: 576px) {
    line-height: 24px;
    font-size: 18px;
  }
`;

class TopDestinations extends React.Component {
  render() {
    return (
      <WrapperBg>
        <Grid>
          <Row center="xs">
            <Col lg={6} md={8} xs={10}>
              <IconStyled>
                <img src={mainIcon} alt="" />
              </IconStyled>
              <Title>
                Популярные направления перелетов
                <br />
                из города
                <a href="#">
                  &#00; Москва
                  <img src={editIcon} alt="" />
                </a>
              </Title>
            </Col>
          </Row>
          <Row center="xs">
            <Col xl={6} lg={8} md={10} xs={12}>
              <FlexWrapper
                className="top-destinations_category"
                d="flex"
                wrap="wrap"
                jc="space-between"
                mb="60px"
              >
                {catProps.map((item, index) => (
                  <Category {...item} />
                ))}
              </FlexWrapper>
            </Col>
          </Row>
          <Row center="xs">
            <Col lg={10} xs={12}>
              <FlexWrapper
                className="top-destinations_cards"
                d="flex"
                wrap="wrap"
              >
                {cards.map((card, index) => (
                  <Card {...card} />
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
