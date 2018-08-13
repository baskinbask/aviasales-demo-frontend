import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import AirLogo from "./AirLogo";

const CardTitle = styled.div`
  padding: 7px 0 7px 6px;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: ${props => props.colorBg};
`;
const CardWrapper = styled.div`
  padding: 12px 6px;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  background: #fff;
`;

const Price = styled.p`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const FlightTime = styled.p``;

const FlightDur = styled.p``;

class CardMob extends React.Component {
  render() {
    return (
      <div>
        {this.props.title && (
          <CardTitle colorBg={this.props.colorBg}>{this.props.title}</CardTitle>
        )}
        <CardWrapper>
          <FlexWrapper jc="space-between" ai="flex-start">
            <Price>{this.props.price}</Price>
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
          <FlexWrapper>
            <FlightTime>
              {this.props.departure.depTo} - {this.props.departure.arrTo}
            </FlightTime>
            <FlightDur>{this.props.departure.durTo}</FlightDur>
            <p>Прямой</p>
          </FlexWrapper>
        </CardWrapper>
      </div>
    );
  }
}

export default CardMob;
