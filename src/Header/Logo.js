import React, { Component } from "react";
import styled from "styled-components";

import logo from "./icons/logo.svg";

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

  @media (max-width: 576px) {
    & span {
      display: none;
    }
  }
`;

class Logo extends React.Component {
  render() {
    return (
      <LogoStyled>
        <img src={logo} alt="Logo" />
        <span>Aviasales</span>
      </LogoStyled>
    );
  }
}

export default Logo;
