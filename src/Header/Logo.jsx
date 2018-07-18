import React, { Component } from "react";
import styled from "styled-components";

import logo from "./img/logo.svg";

const LogoStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-left: 8px;
  font-size: 20px;
  color: #fff;
  text-transform: lowercase;

  & img {
    margin-right: 10px;
  }
`;

class Logo extends Component {
  render() {
    return (
      <LogoStyled>
        <img src={logo} alt={logo} />
        <span>Aviasales</span>
      </LogoStyled>
    );
  }
}

export default Logo;
