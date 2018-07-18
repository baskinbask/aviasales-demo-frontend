import React, { Component } from "react";
import styled from "styled-components";

import Input from "./Input";

const FormWrapper = styled.form.attrs({
  action: "/"
})`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class FilterForm extends Component {
  render() {
    return (
      <FormWrapper>
        <Input
          type="text"
          placeholder="Город отправления"
          icon="Arrow"
          city="mow"
          value="Москва"
        />
        <Input type="text" placeholder="Город прибытия" />
        <Input type="text" placeholder="Туда" icon="Calendar" />
        <Input type="text" placeholder="Обратно" icon="Calendar" />
        <Input
          type="text"
          value="1 класс"
          placeholder="эконом"
          icon="Dropdown"
        />
        <Input type="submit" value="Найти билеты" icon="Plane" />
      </FormWrapper>
    );
  }
}

export default FilterForm;
