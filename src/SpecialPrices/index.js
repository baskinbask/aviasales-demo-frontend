import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import Emails from "./Emails";
import Card from "./Card";
import { cardsSpec } from "./cardsSpec";

const WrapperBg = styled.div`
  margin-top: 25px;
  padding: 24px 0;
  background: linear-gradient(163.59deg, #00b0de 0%, #196ebd 100%);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  line-height: 42px;
  font-size: 30px;
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  flex-basis: 50%
  text-align: left;
  text-decoration-line: underline;
  color: #ffffff;

  & ~ span {
    flex-basis: 50%;
    text-align: right;
    color: #fff;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
    text-align: center;

    & ~ span {
      flex-basis: 100%;
      margin-top: 15px;
      text-align: center;
    }
  }

`;

class SpecialPrices extends React.Component {
  render() {
    return (
      <div>
        <Emails />
        <WrapperBg>
          <Grid>
            <Row center="xs">
              <Col lg={10} xs={12}>
                <Title>Спецпредложения на авиабилеты</Title>
                <FlexWrapper className="specPrices__cards" jc="space-between">
                  {cardsSpec.map((item, index) => (
                    <Card
                      city={item.city}
                      icon={item.icon}
                      title={item.title}
                      air={item.air}
                      logo={item.logo}
                      price={item.price}
                      remain={item.remain}
                    />
                  ))}
                </FlexWrapper>
                <FlexWrapper jc="space-between" mt="25px" wrap="wrap">
                  <StyledLink to="/search">
                    Смотреть все спецпредложения
                  </StyledLink>
                  <span>*средняя цена по направлению</span>
                </FlexWrapper>
              </Col>
            </Row>
          </Grid>
        </WrapperBg>
      </div>
    );
  }
}

export default SpecialPrices;
