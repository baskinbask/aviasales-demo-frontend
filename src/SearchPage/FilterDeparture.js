import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";

import drop from "./icons/drop.svg";
import plane from "./icons/plane.svg";
import cards from "./cardsArr";

const BlockWrapper = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  text-transform: uppercase;
  color: #5b5b5c;

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    transform: translateY(10px);
    background: url(${drop}) no-repeat;
  }
`;

const DestinationTitle = styled.p`
  margin-top: 20px;
  padding: 5px 0;
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #323333;

  & span {
    position: relative;
    margin-right: 25px;

    &::after {
      position: absolute;
      right: -20px;
      top: 0;
      content: "";
      width: 15px;
      height: 15px;
      background: url(${plane}) no-repeat;
    }
  }
`;

const FlightDuration = styled.div`
  margin-top: 16px;
  font-size: 12px;
  line-height: 18px;
  color: #323333;

  & p {
    display: flex;
    margin: 0;

    & span {
      display: inline-block;
      margin-left: auto;
    }
  }
`;

const FlightDurGraph = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 2px;
  background: #00acde;

  &::before,
  &::after {
    position: absolute;
    top: -8px;
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #a0b0b9;
    background: #fff;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const BlockFilters = styled.div``;

const FlightDestWrap = styled.div``;

class FilterDeparture extends React.Component {
  render() {
    return (
      <BlockWrapper>
        <Title>{this.props.title}</Title>
        <BlockFilters>
          <FlightDestWrap>
            <DestinationTitle>
              <span>{cards[0].departure.from}</span>
              {cards[0].departure.to}
            </DestinationTitle>
            <FlightDuration>
              {this.props.duration ? (
                <p>
                  от {cards[0].departure.durTo}
                  <span>до 48ч 50м</span>
                </p>
              ) : (
                <div>
                  Вылет из Москвы:
                  <p>
                    c 00:05, 24 фев
                    <span>до 23:45, 24 фев</span>
                  </p>
                </div>
              )}
              <FlightDurGraph />
            </FlightDuration>
            {!this.props.duration && (
              <FlightDuration>
                <p>Прилет в Барселону:</p>
                <p>
                  c 00:05, 24 фев
                  <span>до 23:45, 24 фев</span>
                </p>
                <FlightDurGraph />
              </FlightDuration>
            )}
          </FlightDestWrap>
          <FlightDestWrap>
            <DestinationTitle>
              <span>{cards[0].arrival.to}</span>
              {cards[0].arrival.from}
            </DestinationTitle>
            <FlightDuration>
              {this.props.duration ? (
                <p>
                  от {cards[0].arrival.durFrom}
                  <span>до 48ч 50м</span>
                </p>
              ) : (
                <div>
                  Вылет из Барселоны:
                  <p>
                    c 00:05, 24 фев
                    <span>до 23:45, 24 фев</span>
                  </p>
                </div>
              )}
              <FlightDurGraph />
            </FlightDuration>
            {!this.props.duration && (
              <FlightDuration>
                <p>Прилет в Москву:</p>
                <p>
                  c 00:05, 24 фев
                  <span>до 23:45, 24 фев</span>
                </p>
                <FlightDurGraph />
              </FlightDuration>
            )}
          </FlightDestWrap>
        </BlockFilters>
      </BlockWrapper>
    );
  }
}

export default FilterDeparture;
