import React, { Component } from "react";
import styled from "styled-components";

import checked from "./icons/checked.svg";
import drop from "./icons/drop.svg";

const BlockWrapper = styled.div`
  padding-bottom: 12px;
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

const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #4a4a4a;
`;

const Subtitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #323333;
`;

const BlockFilters = styled.div``;

const airlines = [
  { name: "Aegean Airlines", price: 22345 },
  { name: "Air Algerie", price: 20345 },
  { name: "Air Europa", price: 19845 },
  { name: "Air France", price: 19763 },
  { name: "Air Moldova", price: 21050 },
  { name: "Alitalia", price: 21875 },
  { name: "Alitalia CityLiner", price: 24520 },
  { name: "Belle Air", price: 21000 },
  { name: "British Airways", price: 25432 },
  { name: "Brussels Airlines", price: 20765 },
  { name: "Bulgaria Air", price: 21345 }
];

class FilterAirlines extends React.Component {
  render() {
    return (
      <BlockWrapper>
        <Title count={this.props.count}>{this.props.title}</Title>
        <BlockFilters>
          <Input id="some" type="checkbox" hidden />
          <Label htmlFor="some">Несколько авиакомпаний</Label>
          <Description>
            Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную
          </Description>
          <Subtitle>Альянсы</Subtitle>
          <Input type="checkbox" hidden checked />
          <Label>Все</Label>
          <Input type="checkbox" hidden checked />
          <Label>
            Star Alliance
            <span>11 123 ₽</span>
          </Label>
          <Input type="checkbox" hidden checked />
          <Label>
            OneWorld
            <span>12 777 ₽</span>
          </Label>
          <Input type="checkbox" hidden checked />
          <Label>
            SkyTeam
            <span>14 123 ₽</span>
          </Label>
          <Subtitle>Авиакомпании</Subtitle>
          <Input type="checkbox" hidden checked />
          <Label>Все</Label>
          {airlines.map(item => (
            <div>
              <Input type="checkbox" hidden checked />
              <Label>
                {item.name}
                <span>{item.price} ₽</span>
              </Label>
            </div>
          ))}
        </BlockFilters>
      </BlockWrapper>
    );
  }
}

export default FilterAirlines;
