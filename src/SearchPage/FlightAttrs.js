import React, { Component } from "react";
import styled from "styled-components";
import pin from "./icons/pin.svg";

const DepartureTime = styled.p`
  margin-top: 12px;
  margin-bottom: 0;
  line-height: 40px;
  font-size: 28px;
  color: #323333;

  &::before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    padding-right: 8px;
    background: url(${pin}) no-repeat;
  }
`;

const ArriveTime = DepartureTime.extend`
  text-align: right;
  &::before {
    content: none;
  }
`;

const DepartureDate = styled.p`
  margin: 0;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;

  & p {
    margin: 0;
  }
`;

const ArriveDate = DepartureDate.extend`
  text-align: right;
`;

class FlightAttrs extends React.Component {
  render() {
    if (this.props.departure && this.props.return) {
      return (
        <div>
          <DepartureTime>{this.props.departure.depFrom}</DepartureTime>
          <DepartureDate>
            {this.props.departure.to}
            <p>{this.props.departure.dateFrom}</p>
          </DepartureDate>
        </div>
      );
    } else if (this.props.departure) {
      return (
        <div>
          <DepartureTime>{this.props.departure.depTo}</DepartureTime>
          <DepartureDate>
            {this.props.departure.from}
            <p>{this.props.departure.dateTo}</p>
          </DepartureDate>
        </div>
      );
    } else if (this.props.arrival && this.props.return) {
      return (
        <div>
          <ArriveTime>{this.props.arrival.arrFrom}</ArriveTime>
          <ArriveDate>
            {this.props.arrival.from}
            <p>{this.props.arrival.dateFrom}</p>
          </ArriveDate>
        </div>
      );
    } else if (this.props.arrival) {
      return (
        <div>
          <ArriveTime>{this.props.arrival.arrTo}</ArriveTime>
          <ArriveDate>
            {this.props.arrival.to}
            <p>{this.props.arrival.dateTo}</p>
          </ArriveDate>
        </div>
      );
    }
  }
}

export default FlightAttrs;
