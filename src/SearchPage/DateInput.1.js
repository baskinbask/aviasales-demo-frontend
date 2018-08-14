import React, { Component } from "react";
import moment from "moment";
import Helmet from "react-helmet";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";

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
      <div className="InputFromTo DateInput">
        <DayPickerInput
          value={from}
          placeholder="Туда"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            onDayClick: () => this.to.getInput().focus()
          }}
          onDayChange={this.handleFromChange}
        />
        <div className="InputFromTo-to DateInput">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="Обратно"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1
            }}
            onDayChange={this.handleToChange}
          />
        </div>
        <Helmet>
          <style>{`
            .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background-color: #f0f8ff !important;
              color: #4a90e2;
            }
            .InputFromTo .DayPicker-Day {
              border-radius: 0 !important;
            }
            .InputFromTo .DayPicker-Day--start {
              border-top-left-radius: 50% !important;
              border-bottom-left-radius: 50% !important;
            }
            .InputFromTo .DayPicker-Day--end {
              border-top-right-radius: 50% !important;
              border-bottom-right-radius: 50% !important;
            }
            .InputFromTo .DayPickerInput-Overlay {
              width: 385px;
              margin-top: -55px;
            }
            .InputFromTo-to .DayPickerInput-Overlay {
              margin-left: -195px;
            }
          `}</style>
        </Helmet>
      </div>
    );
  }
}
