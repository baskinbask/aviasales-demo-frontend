import React, { Component } from "react";
import styled from "styled-components";
import "react-day-picker/lib/style.css";

import Icon from "./Icons";

const LabelTag = styled.label`
  position: relative;

  &:not(:last-child) {
    margin-right: 2px;
  }

  &[for="departure"],
  &[for="arrival"] {
    flex-basis: 22%;
  }

  @media (max-width: 1200px) {
    &[for="departure"],
    &[for="arrival"] {
      flex-basis: 20%;
    }
  }

  @media (max-width: 992px) {
    &:nth-child(2) {
      margin-right: 0;
    }

    &[for="departure"],
    &[for="arrival"] {
      flex-basis: 49.5%;
    }
  }

  @media (max-width: 576px) {
    &:not(:nth-child(3)) {
      margin-right: 0;
    }

    &[for="departure"],
    &[for="arrival"] {
      flex-basis: 100%;
    }
  }
`;

const CityCode = styled.span`
  position: absolute;
  top: 19px;
  right: 35px;
  color: #a0b0b9;
  text-transform: uppercase;
`;

const InputTag = styled.input`
  width: 100%;
  padding: 18px 0 18px 10px;
  box-sizing: border-box;
  border: none;

  &::placeholder {
    color: #a0b0b9;
  }

  &#departure {
    border-radius: 4px 0 0 4px;
  }

  @media (max-width: 992px) {
    &#departure {
      border-radius: 4px 0 0 0;
      margin-bottom: 2px;
    }

    &#arrival {
      border-radius: 0 4px 0 0;
      margin-bottom: 2px;
    }
  }

  @media (max-width: 576px) {
    &#departure {
      border-radius: 4px 4px 0 0;
      margin-bottom: 2px;
    }
  }
`;

class Input extends React.Component {
  render() {
    return (
      <LabelTag className={this.props.className} htmlFor={this.props.id}>
        <InputTag
          id={this.props.id}
          className={this.props.className}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
        />
        {this.props.city && !this.props.icon ? (
          <CityCode style={{ right: "5px" }}>{this.props.city}</CityCode>
        ) : (
          <CityCode>{this.props.city}</CityCode>
        )}
        {this.props.icon && <Icon name={this.props.icon} />}
      </LabelTag>
    );
  }
}

export default Input;
