import React, { Component } from "react";
import styled from "styled-components";

import Icon from "./Icons";

const LabelTag = styled.label`
  position: relative;

  &:not(:last-child) {
    margin-right: 2px;
  }

  &[for="departure"],
  &[for="arrival"],
  &[for="amount"] {
    flex-basis: 21.5%;
  }

  &[for="dateFrom"],
  &[for="dateTo"] {
    flex-basis: 17%;
  }

  @media (max-width: 992px) {
    &:nth-child(2) {
      margin-right: 0;
    }

    &[for="departure"],
    &[for="arrival"],
    &[for="amount"] {
      flex-basis: 49%;
    }

    &[for="dateFrom"],
    &[for="dateTo"] {
      flex-basis: 24.35%;
    }
  }

  @media (max-width: 576px) {
    &:not(:nth-child(3)) {
      margin-right: 0;
    }

    &[for="departure"],
    &[for="arrival"],
    &[for="amount"] {
      flex-basis: 100%;
    }

    &[for="dateFrom"],
    &[for="dateTo"] {
      flex-basis: 49.6%;
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

  &#amount {
    border-radius: 0 4px 4px 0;
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

    &#dateFrom {
      border-radius: 0 0 0 4px;
    }

    &#amount {
      border-radius: 0 0 4px 0;
    }
  }

  @media (max-width: 576px) {
    &#departure {
      border-radius: 4px 4px 0 0;
      margin-bottom: 2px;
    }

    &#arrival,
    &#dateFrom {
      border-radius: 0;
    }

    &#dateFrom,
    &#dateTo {
      margin-bottom: 2px;
    }

    &#amount {
      border-radius: 0 0 4px 4px;
    }
  }
`;

class Input extends React.Component {
  render() {
    return (
      <LabelTag htmlFor={this.props.id}>
        <InputTag
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          required
        />
        {this.props.city && <CityCode>{this.props.city}</CityCode>}
        {this.props.icon && <Icon name={this.props.icon} />}
      </LabelTag>
    );
  }
}

export default Input;
