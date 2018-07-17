import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const Logo = styled.div`
  padding: 10px;
  color: #fff;
  text-transfornm: lowercase;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  text-align: center;
  color: #ffffff;
`;

const SubTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;

class Header extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Logo>
            <img src="{logo}" alt="{logo}" />
            Aviasales
          </Logo>
        </Col>
      </Row>
    );
  }
}

export default Header;
