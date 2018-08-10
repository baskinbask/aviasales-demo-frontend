import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const ButtonLink = styled(Link)`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 576px) {
    width: 100%;
    font-size: 20px;
  }
`;

class Filter extends Component {
  render() {
    return (
      <FlexWrapper d="flex" wrap="wrap">
        <Input
          id="departure"
          type="text"
          placeholder="Город отправления"
          icon="arrow"
          city="mow"
          value="Москва"
        />
        <Input id="arrival" type="text" placeholder="Город прибытия" />
        <Input id="dateFrom" type="text" placeholder="Туда" icon="calendar" />
        <Input id="dateTo" type="text" placeholder="Обратно" icon="calendar" />
        <Select id="select" value="1 пассажир" stage="эконом" />

        <ButtonLink to="/search">
          <Button type="submit" value="Найти билеты" icon="plane" />
        </ButtonLink>
      </FlexWrapper>
    );
  }
}

export default Filter;
