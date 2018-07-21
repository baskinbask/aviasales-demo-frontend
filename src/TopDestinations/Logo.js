import React, { Component } from "react";
import styled from "styled-components";

import logo from "./img/icons/logo.svg";

const LogoStyled = styled.div`
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

class Logo extends React.Component {
  render() {
    return (
      <LogoStyled>
        <img src={logo} alt="Logo" />
      </LogoStyled>
    );
  }
}

export default Logo;
