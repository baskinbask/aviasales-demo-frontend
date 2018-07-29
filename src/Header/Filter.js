import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

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
        <Button type="submit" value="Найти билеты" icon="plane" />
      </FlexWrapper>
    );
  }
}

export default Filter;
