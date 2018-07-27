import React, { Component } from "react";
import styled from "styled-components";

import Icon from "./Icons";

const ButtonTag = styled.button`
  position: relative;
  margin-top: 48px;
  padding: ${props => (props.icon ? "15px 75px 15px 45px;" : "15px;")};
  background: #ff9241;
  border: none;
  border-radius: 4px;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: -5px 7px 10px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
    border: none;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 20px;
  }
`;

class Button extends React.Component {
  render() {
    return (
      <ButtonTag type={this.props.type} icon={this.props.icon}>
        {this.props.value}
        {this.props.icon && <Icon name={this.props.icon} />}
      </ButtonTag>
    );
  }
}

export default Button;
