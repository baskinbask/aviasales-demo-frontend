import React, { Component } from "react";
import styled from "styled-components";

import ArrowIcon from "./icons/arrow.svg";
import CalendarIcon from "./icons/calendar.svg";
import DropdownIcon from "./icons/drop.svg";
import PlaneIcon from "./icons/aero.svg";

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
  top: 22px;
  right: 20px;
  width: 25px;
  height: 22px;
  background: url(${PlaneIcon}) no-repeat;

  @media (max-width: 576px) {
    top: 18px;
    right: 50%;
    transform: translateX(100px);
  }
`;

class Icon extends Component {
  render() {
    switch (this.props.name) {
      case "arrow":
        return <Arrow />;
        break;
      case "calendar":
        return <Calendar />;
        break;
      case "dropdown":
        return <Dropdown />;
        break;
      case "plane":
        return <Plane />;
        break;
      default:
        return true;
    }
  }
}

export default Icon;
