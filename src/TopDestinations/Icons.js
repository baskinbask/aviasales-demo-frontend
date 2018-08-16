import React, { Component } from "react";
import styled from "styled-components";

import globeIcon from "./icons/globe.svg";
import treeIcon from "./icons/tree.svg";
import bagIcon from "./icons/bag.svg";
import cultureIcon from "./icons/culture.svg";
import drinkIcon from "./icons/drink.svg";
import babyIcon from "./icons/baby.svg";

const IconStyled = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: ${props =>
    props.active
      ? "0px 4px 16px rgba(74, 74, 74, 0.12);"
      : "0px 2px 4px rgba(74, 74, 74, 0.1);"};
  border-radius: 50%;
  cursor: pointer;

  & img {
    margin-top: 50%;
    transform: translateY(-50%);
  }
`;

class Icon extends React.Component {
  render() {
    let img;

    switch (this.props.name) {
      case "globe":
        img = <img src={globeIcon} alt="" />;
        break;
      case "tree":
        img = <img src={treeIcon} alt="" />;
        break;
      case "bag":
        img = <img src={bagIcon} alt="" />;
        break;
      case "culture":
        img = <img src={cultureIcon} alt="" />;
        break;
      case "drink":
        img = <img src={drinkIcon} alt="" />;
        break;
      case "baby":
        img = <img src={babyIcon} alt="" />;
        break;
      default:
        img = true;
    }

    return <IconStyled active={this.props.active}>{img}</IconStyled>;
  }
}

export default Icon;
