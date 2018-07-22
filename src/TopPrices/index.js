import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import mainIcon from "./mainIcon.svg";
import TravelPoint from "../TopDestinations/TravelPoint";
import List from "./List";
import { listFrom } from "../common/listFrom";

const WrapperBg = styled.div`
  padding-top: 32px;
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

  @media (max-width: 576px) {
    line-height: 24px;
    font-size: 18px;
  }
`;

const Desc = styled.p`
  line-height: 26px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
`;

const Privacy = styled.p`
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
`;

class TopPrices extends React.Component {
  render() {
    return (
      <WrapperBg>
        <Grid>
          <Row center="xs">
            <Col lg={6} md={8} xs={10}>
              <IconStyled>
                <img src={mainIcon} alt="" />
              </IconStyled>
              <Title>Лучшие цены на авиабилеты за последний месяц</Title>
            </Col>
          </Row>
          <Row center="xs">
            <Col lg={10} xs={12}>
              <FlexWrapper d="flex" jc="space-between">
                {listFrom.map(item => (
                  <TravelPoint country={item.country} city={item.city} />
                ))}
              </FlexWrapper>
            </Col>
          </Row>
          <Row center="xs">
            <Col lg={8} md={10} xs={12}>
              <Desc>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
                стран мира.<br /> Поиск и сравнение цен на авиабилеты среди 100
                агентств и 728 авиакомпаний.
              </Desc>
              <Privacy>
                Цены, найденные пользователями за последние 48 часов, не
                являются офертой.
              </Privacy>
            </Col>
          </Row>
        </Grid>
      </WrapperBg>
    );
  }
}

export default TopPrices;
