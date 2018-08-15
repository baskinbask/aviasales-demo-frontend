import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import { Label, Input } from "../SearchPage/FilterAirlines";
import drop from "../SearchPage/icons/dropBlack.svg";
import Counter from "../SearchPage/Counter";

// const LabelTag = styled.label`
//   position: relative;
// `;

const DropDownField = styled.div`
  position: relative;
  flex: 1;
  min-width: 180px;
  padding: 18px 10px;
  border: none;
  border-radius: 0 4px 4px 0;
  background: #fff;

  & span {
    color: #dbdbdb;
  }

  @media (max-width: 992px) {
    flex-basis: 47.5%;
    margin-right: 2px;
    border-radius: 0;
  }

  @media (max-width: 768px) {
    min-width: 137px;

    & span {
      display: none;
    }
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
    border-radius: 0 0 4px 4px;
  }
`;

const DropDownIco = styled.button`
  position: absolute;
  right: 10px;
  top: 45%;
  content: "";
  width: 10px;
  height: 5px;
  border: 0;
  background: transparent url(${drop}) no-repeat;
  transform: ${props => (props.icon ? "rotate(-180deg);" : "rotate(0);")};
  cursor: pointer;
`;

const DropDownCard = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  z-index: 10;
  width: 211px;
  padding: 16px;
  padding-bottom: 0;
  font-size: 14px;
  background: #fff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
`;

const Text = styled.p`
  margin: 0;

  & p {
    margin: 0;
    font-size: 12px;
    color: #dbdbdb;
  }
`;

const Card = props => {
  return (
    <DropDownCard style={{ display: props.visible }} className="dropDownCard">
      <FlexWrapper jc="space-between" ai="center" mb="16px">
        <Text>Взрослые</Text>
        <Counter />
      </FlexWrapper>
      <FlexWrapper jc="space-between" ai="center" mb="16px">
        <Text>Дети до 12 лет</Text>
        <Counter />
      </FlexWrapper>
      <FlexWrapper jc="space-between" ai="center" mb="16px">
        <Text>
          Дети до 2 лет
          <p>Без места</p>
        </Text>
        <Counter />
      </FlexWrapper>
      <hr />
      <Input type="checkbox" hidden />
      <Label>Бизнес класс</Label>
    </DropDownCard>
  );
};

class Select extends React.Component {
  constructor() {
    super();
    this.state = { showCard: "none", icon: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    const current = this.state.showCard;
    this.setState({ showCard: !current, icon: !this.state.icon });
  };

  render() {
    return (
      <div className="select__wrap">
        <DropDownField
          onClick={this.clickHandler}
          id={this.props.id}
          className={this.props.className}
        >
          1 пассажир, <span>эконом</span>
          <DropDownIco onClick={this.clickHandler} icon={this.state.icon} />
          <Card visible={this.state.showCard} />
        </DropDownField>
      </div>
    );
  }
}

export default Select;
