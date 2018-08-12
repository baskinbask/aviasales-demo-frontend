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

// const Label = styled.label`
//   display: flex;
//   width: 100%;
//   padding: 12px 0;
//   font-size: 12px;
//   color: #4a4a4a;

//   & span {
//     display: block;
//     margin-left: auto;
//     color: #a0b0b9;
//   }

//   &::before {
//     content: "";
//     width: 18px;
//     height: 18px;
//     transform: translateY(-3px);
//     margin-right: 6px;
//     border: 1px solid #a0b0b9;
//     border-radius: 4px;
//   }
// `;

// const Input = styled.input`
//   &:checked + label::before {
//     border: none;
//     background: url(${checked}) no-repeat;
//   }
// `;

// const BlockFilters = styled.div``;

class FilterBlank extends React.Component {
  render() {
    return (
      <BlockWrapper>
        <Title count={this.props.count}>{this.props.title}</Title>
        {/* <BlockFilters>
          <Input type="checkbox" hidden checked />
          <Label>Все</Label>
          <Input type="checkbox" hidden />
          <Label>
            Без пересадок
            <span>5 123 ₽</span>
          </Label>
          <Input type="checkbox" hidden />
          <Label>
            1 пересадка
            <span>4 777 ₽</span>
          </Label>
          <Input type="checkbox" hidden checked />
          <Label>
            2 пересадки
            <span>4 123 ₽</span>
          </Label>
          <Input type="checkbox" hidden />
          <Label>
            3 пересадки
            <span>3 789 ₽</span>
          </Label>
        </BlockFilters> */}
      </BlockWrapper>
    );
  }
}

export default FilterBlank;