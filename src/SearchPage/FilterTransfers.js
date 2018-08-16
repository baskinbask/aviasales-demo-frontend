import React, { Component } from "react";
import styled from "styled-components";

import checked from "./icons/checked.svg";
import drop from "./icons/drop.svg";

const BlockWrapper = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.p`
  margin-top: 0;
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
    margin-right: 5px;
    transform: translateY(10px);
    background: url(${drop}) no-repeat;
    cursor: pointer;
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

const Label = styled.label`
  display: flex;
  width: 100%;
  padding: 12px 0;
  font-size: 12px;
  color: #4a4a4a;

  & span {
    display: block;
    margin-left: auto;
    color: #a0b0b9;
  }

  &::before {
    content: "";
    width: 18px;
    height: 18px;
    transform: translateY(-4px);
    margin-right: 6px;
    border: 1px solid #a0b0b9;
    border-radius: 4px;
  }
`;

const Input = styled.input`
  &:checked + label::before {
    border: 1px solid #00ace2;
    background: #e1f8ff url(${checked}) 50% 50% no-repeat;
  }
`;

const BlockFilters = styled.div``;

class FilterTransfers extends React.Component {
  render() {
    return (
      <BlockWrapper>
        <Title count={this.props.count}>{this.props.title}</Title>
        <BlockFilters>
          <Input id="transfAll" type="checkbox" hidden />
          <Label htmlFor="transfAll">Все</Label>
          <Input id="transf1" type="checkbox" hidden />
          <Label htmlFor="transf1">
            Без пересадок
            <span>5 123 ₽</span>
          </Label>
          <Input id="transf2" type="checkbox" hidden />
          <Label htmlFor="transf2">
            1 пересадка
            <span>4 777 ₽</span>
          </Label>
          <Input id="transf3" type="checkbox" hidden checked />
          <Label htmlFor="transf3">
            2 пересадки
            <span>4 123 ₽</span>
          </Label>
          <Input id="transf4" type="checkbox" hidden />
          <Label htmlFor="transf4">
            3 пересадки
            <span>3 789 ₽</span>
          </Label>
        </BlockFilters>
      </BlockWrapper>
    );
  }
}

export default FilterTransfers;
