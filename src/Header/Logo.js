import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
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

  & img {
    margin-right: 10px;
  }

  & a {
    font-size: 20px;
    color: #fff;
    text-transform: lowercase;
    text-decoration: none;
  }
`;

const Logo = () => (
  <LogoStyled>
    <img src={logo} alt="Logo" />
    <MediaQuery minWidth={577}>
      <Link to="/">Aviasales</Link>
    </MediaQuery>
  </LogoStyled>
);

export default Logo;
