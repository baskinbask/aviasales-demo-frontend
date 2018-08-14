import React, { Component } from "react";
// import moment from "moment";
// import Helmet from "react-helmet";
import DayPickerInput from "react-day-picker/DayPickerInput";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";
import "moment/locale/ru";
import "react-day-picker/lib/style.css";
import styled from "styled-components";
// import FlexWrapper from "../common/FlexWrapper";

const Toggle = styled.div`
  display: inline-block;
  margin: 10px 0 10px 20px;
  width: 40px;
  height: 24px;
  background: #bccdd6;
  border-radius: 100px;

  &::before {
    content: "";
    display: block;
    margin: 2px 0 0 2px;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 10px;
  }
`;

const Text = styled.span`
  display: inline-block;
  margin-left: 10px;
  transform: translateY(-17px);
  line-height: 18px;
  font-size: 12px;
  color: #4a4a4a;
`;

function OverlayComponent({ classNames, children, ...props }) {
  return (
    <div className={classNames.overlayWrapper} {...props}>
      <div className={classNames.overlay}>
        {children}
        <Toggle />
        <Text>Показать цены в одну сторону</Text>
      </div>
    </div>
  );
}

export default class DateInput extends React.Component {
  render() {
    const future = {
      after: new Date(2018, 7, 14)
    };
    return <DayPickerInput overlayComponent={OverlayComponent} placeholder={this.props.placeholder} format="LL" formatDate={formatDate} parseDate={parseDate} dayPickerProps={{ locale: "ru", localeUtils: MomentLocaleUtils, modifiers: future}} hideOnDayClick={false} showOutsideDays />;
  }
}
