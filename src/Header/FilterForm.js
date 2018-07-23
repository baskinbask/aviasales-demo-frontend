import React, { Component } from "react";
import styled from "styled-components";

import FlexWrapper from "../common/FlexWrapper";
import Input from "./Input";
import Button from "./Button";

const Form = styled.form.attrs({
  action: "/"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class FilterForm extends Component {
  render() {
    return (
      <Form>
        <FlexWrapper d="flex" dir="row" wrap="wrap">
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
          <Input
            id="dateTo"
            type="text"
            placeholder="Обратно"
            icon="calendar"
          />
          <Input
            id="amount"
            type="text"
            value="1 класс"
            placeholder="эконом"
            icon="dropdown"
          />
        </FlexWrapper>
        <Button type="submit" value="Найти билеты" icon="plane" />
      </Form>
    );
  }
}

export default FilterForm;
