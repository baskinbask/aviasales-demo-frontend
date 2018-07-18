import React, { Component } from "react";
import styled from "styled-components";

import Icon from "./Icon";

const HeaderLabel = styled.label`
  position: relative;

  &:first-child input {
    border-radius: 4px 0 0 4px;
  }

  &:nth-child(5) input {
    border-radius: 0 4px 4px 0;
  }

  &:not(:nth-child(5)) input {
    margin-right: 2px;
  }

  &:last-child {
    margin-top: 48px;
  }
`;

const CityCode = styled.span`
  position: absolute;
  top: 19px;
  right: 35px;
  color: #a0b0b9;
  text-transform: uppercase;
`;

const HeaderInput = styled.input`
  display: inline-block;
  padding: 18px 0 18px 10px;
  box-sizing: border-box;
  border: none;

  &::placeholder {
    color: #a0b0b9;
  }

  &[type="submit"] {
    padding: 15px 75px 15px 45px;
    background: #ff9241;
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
      opacity: 0.9;
      box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

class Input extends Component {
  render() {
    return (
      <HeaderLabel>
        <HeaderInput
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          required
        />
        <CityCode>{this.props.city}</CityCode>
        <Icon name={this.props.icon} />
      </HeaderLabel>
    );
  }
}

export default Input;
