import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import Logo from "./Logo";
import FilterForm from "./FilterForm";

const WrapperBg = styled.div`
  /* height: 100vh; */
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );
`;

const Content = styled.div`
  padding: 254px 0;

  @media (max-width: 992px) {
    padding: 112px 0;
  }

  @media (max-width: 576px) {
    padding: 88px 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 39px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 992px) {
    font-size: 32px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.h2`
  margin-top: 8px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <WrapperBg>
        <Grid>
          <Logo />
          <Content>
            <Row center="xs" middle="xs">
              <Col xl={6}>
                <Title>Поиск дешевых авиабилетов</Title>
                <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
              </Col>
              <Col md={10}>
                <FilterForm />
              </Col>
            </Row>
          </Content>
        </Grid>
      </WrapperBg>
    );
  }
}

export default Header;
