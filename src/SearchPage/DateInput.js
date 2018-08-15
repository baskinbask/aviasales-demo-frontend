import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
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

// function renderDay(day) {
//   const date = day.getDate();
//   const dateStyle = {
//     position: "absolute",
//     color: "lightgray",
//     bottom: 0,
//     right: 0,
//     fontSize: 20
//   };
//   const birthdayStyle = { fontSize: "0.8em", textAlign: "left" };
//   const cellStyle = {
//     height: 50,
//     width: 60,
//     position: "relative"
//   };
//   return (
//     <div style={cellStyle}>
//       <div style={dateStyle}>{date}</div>
//       {prices &&
//         prices.map((price, i) => (
//           <div key={i} style={birthdayStyle}>
//             {price}
//           </div>
//         ))}
//     </div>
//   );
// }

export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay } = this.state;
    const future = {
      after: new Date(selectedDay)
    };
    const past = {
      before: new Date(selectedDay)
    };

    return (
      <div className="DateInput-wrapper">
        <DayPickerInput
          overlayComponent={OverlayComponent}
          placeholder={this.props.placeholder}
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            locale: "ru",
            localeUtils: MomentLocaleUtils,
            modifiers: this.props.future ? { future } : { past },
            showOutsideDays: true,
            selectedDays: this.state.selectedDay
            // renderDay: { renderDay },
            // canChangeMonth: false
          }}
          hideOnDayClick={false}
        />
        <Icon name={this.props.icon} />
      </div>
    );
  }
}
