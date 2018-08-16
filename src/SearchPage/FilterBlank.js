import React, { Component } from "react";
import styled from "styled-components";

import checked from "./icons/checked.svg";
import drop from "./icons/drop.svg";

const BlockWrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
  color: #5b5b5c;

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    background: url(${drop}) no-repeat;
  }

  &::after {
    content: "${props => props.count}";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left:10px;
    color: #A0B0B9;
  }
`;

class FilterBlank extends React.Component {
  render() {
    return (
      <BlockWrapper>
        <Title count={this.props.count}>{this.props.title}</Title>
      </BlockWrapper>
    );
  }
}

export default FilterBlank;
