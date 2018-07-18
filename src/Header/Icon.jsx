import React, { Component } from "react";
import styled from "styled-components";

import ArrowIcon from "./img/arrow.svg";
import CalendarIcon from "./img/calendar.svg";
import DropdownIcon from "./img/drop.svg";
import PlaneIcon from "./img/aero.svg";

const IconStyled = styled.div`
  position: absolute;
  top: 16px;
  right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Arrow = IconStyled.extend`
  top: 19px;
  background: url(${ArrowIcon}) no-repeat;
`;

const Calendar = IconStyled.extend`
  background: url(${CalendarIcon}) no-repeat;
`;

const Dropdown = IconStyled.extend`
  top: 23px;
  right: 20px;
  width: 10px;
  height: 6px;
  background: url(${DropdownIcon}) no-repeat;
`;

const Plane = IconStyled.extend`
  top: 23px;
  right: 25px;
  width: 25px;
  background: url(${PlaneIcon}) no-repeat;
`;

class Icon extends Component {
  render() {
    switch (this.props.name) {
      case "Arrow":
        return <Arrow />;
        break;
      case "Calendar":
        return <Calendar />;
        break;
      case "Dropdown":
        return <Dropdown />;
        break;
      case "Plane":
        return <Plane />;
        break;
      default:
        return true;
    }
  }
}

export default Icon;
