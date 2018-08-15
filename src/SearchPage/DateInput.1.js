import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import moment from "moment";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";
import "moment/locale/ru";
import "react-day-picker/lib/style.css";
import styled from "styled-components";
import Icon from "../Header/Icons";

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

const prices = [23456, 24567, 24535, 23456, 27890];

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
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined
    };
  }
  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="InputFromTo">
        <div style={{ position: "relative" }}>
          <DayPickerInput
            overlayComponent={OverlayComponent}
            placeholder="Туда"
            value={from}
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              locale: "ru",
              localeUtils: MomentLocaleUtils,
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 1,
              showOutsideDays: true,
              onDayClick: () => this.to.getInput().focus()
            }}
            onDayChange={this.handleFromChange}
            hideOnDayClick={false}
          />
          <Icon name={this.props.icon} />
        </div>
        <div className="InputFromTo-to">
          <DayPickerInput
            overlayComponent={OverlayComponent}
            placeholder="Обратно"
            ref={el => (this.to = el)}
            value={to}
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              locale: "ru",
              localeUtils: MomentLocaleUtils,
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
              showOutsideDays: true
            }}
            onDayChange={this.handleToChange}
            hideOnDayClick={false}
          />
          <Icon name={this.props.icon} />
        </div>
      </div>
    );
  }
}
