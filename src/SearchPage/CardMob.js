import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import AirLogo from "./AirLogo";
import plane from "./icons/planeBlue.svg";
import clock from "./icons/clock.svg";

const CardTitle = styled.div`
  padding: 7px 0 7px 6px;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: ${props => props.colorBg};
`;
const CardWrapper = styled.div`
  margin-bottom: 10px;
  padding: 12px 6px;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  background: #fff;
`;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const FlightTime = styled.p`
  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    background: url(${plane}) no-repeat;
    transform: ${props => (props.back ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const FlightDur = styled.p`
  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    margin-right: 8px;
    height: 12px;
    margin-right: 8px;
    background: url(${clock}) no-repeat;
  }
`;

class CardMob extends React.Component {
  render() {
    return (
      <div>
        {this.props.title && (
          <CardTitle colorBg={this.props.colorBg}>{this.props.title}</CardTitle>
        )}
        <CardWrapper>
          <FlexWrapper jc="space-between" ai="center">
            <Price>{this.props.price} ₽</Price>
            {this.props.departure.airline && this.props.arrival.airline ? (
              <div>
                <AirLogo airline={this.props.departure.airline} />
                <AirLogo airline={this.props.arrival.airline} />
              </div>
            ) : (
              <AirLogo
                airline={this.props.departure.airline}
                style={{ border: "none" }}
              />
            )}
          </FlexWrapper>
          <FlexWrapper jc="space-between">
            <FlightTime>
              {this.props.departure.depTo} - {this.props.arrival.arrTo}
            </FlightTime>
            <FlightDur>{this.props.departure.durTo}</FlightDur>
            <p>Прямой</p>
          </FlexWrapper>
          <FlexWrapper jc="space-between">
            <FlightTime back>
              {this.props.departure.depFrom} - {this.props.arrival.arrFrom}
            </FlightTime>
            <FlightDur>{this.props.arrival.durFrom}</FlightDur>
            <p>Прямой</p>
          </FlexWrapper>
        </CardWrapper>
      </div>
    );
  }
}

export default CardMob;
