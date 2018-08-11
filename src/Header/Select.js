import React, { Component } from "react";
import styled from "styled-components";

// const LabelTag = styled.label`
//   position: relative;
// `;

const SelectTag = styled.select`
  ${"" /* flex-basis: 21%; */} padding: 16px 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 0 4px 4px 0;

  @media (max-width: 992px) {
    border-radius: 0 0 4px 0;
    flex-basis: 49.5%;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
    border-radius: 0 0 4px 4px;
  }
`;

const OptionTag = styled.option`
  & span {
    color: #a0b0b9;
  }
`;

class Select extends React.Component {
  render() {
    return (
      <SelectTag
        id={this.props.id}
        className={this.props.className}
        name={this.props.id}
        required
      >
        <OptionTag selected>1 пассажир, эконом</OptionTag>
      </SelectTag>
    );
  }
}

export default Select;
