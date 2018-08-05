import React, { Component } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import FlexWrapper from "../common/FlexWrapper";

import FlightAttrs from "./FlightAttrs";
import carryOn from "./icons/laggageS.svg";
import laggage from "./icons/laggageL.svg";
import rusAir from "./icons/rus.png";
import rusAir2x from "./icons/rus@2x.png";
import backArrow from "./icons/returnArr.svg";
import plane from "./icons/planeUp.svg";
import drop from "./icons/drop.svg";

const CardWrap = styled.div`
  max-width: 718px;
  margin-bottom: 40px;
  display: flex;
  border-radius: 4px;
  background: #fff;
`;

const LeftCol = styled.div`
  padding: 10px 23px;
  border-right: 1px solid #ddd;
`;

const RightCol = styled.div`
  width: 509px;
  padding: 16px;
`;

const OptionPanel = styled.div`
  position: relative;
  width: 20px;
  background: #edf5f7;
  border-radius: 0 4px 4px 0;

  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    left: 20%;
    width: 10px;
    height: 10px;
    background: url(${drop}) no-repeat;
  }
`;

const LaggageWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 45px;
  justify-content: center;
`;

const LaggageIcons = styled.div`
  position: relative;
  padding-top: 25px;
  font-size: 10px;
  text-align: center;
  color: #9ab0b9;

   &::before {
    position: absolute;
    content: "${props => (props.carryon ? props.carryon : "X")}";
    padding-top: 7px;    
    margin-right: 6px;
    width: 20px;
    height: 20px;
    right: 0;
    top: 0;
    color: ${props => (props.carryon ? "#9ab0b9;" : "red;")};
    background: url(${carryOn}) no-repeat;
  }

  &::after {
    position: absolute;
    content: "${props => (props.laggage ? props.laggage : "X")}";
    padding-top: 7px;
    width: 17px;
    height: 23px;
    left: 0;
    top: 0;
    color: ${props => (props.laggage ? "#9ab0b9;" : "red;")};
    background: url(${laggage}) no-repeat;
  }  
`;

const Button = styled.button`
  width: 162px;
  padding: 6px 44px;
  color: #fff;
  text-align: center;
  background: #ff6d00;
  border-radius: 4px;
  border: none;
`;

const PlaceToBuy = styled.p`
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const AirLogo = styled.img``;

const CharterPic = styled.div`
  position: relative;
  padding: 4px 11px;
  margin-right: 30px;
  border: 1px solid #2196f3;
  border-radius: 15px;
  line-height: 18px;
  font-size: 10px;
  color: #23a9f6;
  text-align: center;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: -30px;
    top: 0;
    content: "";
    display: block;
    width: 17px;
    height: 14px;
    margin-left: 10px;
    background: url(${backArrow}) no-repeat;
  }
`;

const FlightDurWrap = styled.div`
  width: 100%;
  max-width: 210px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
`;

const FlightDuration = styled.p`
  position: relative;
  margin-top: 20px;
  margin-bottom: 0;
  line-height: 18px;
  font-size: 12px;
  color: #a0b0b9;

  &::before,
  &::after {
    position: absolute;
    top: 3px;
    content: "";
    display: inline-block;
    width: 16px;
    height: 8px;
    background: url(${plane});
  }

  &::before {
    left: 0;
    transform: rotate(-20deg);
  }

  &::after {
    right: 0;
    transform: rotate(20deg);
  }
`;

const FlightDurGraph = styled.div`
  position: relative;
  display: inline-block;
  width: 86%;
  height: 1px;
  background: #a0b0b9;

  &::before,
  &::after {
    position: absolute;
    top: -6px;
    content: "";
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 1px solid #a0b0b9;
  }

  &::before {
    left: -15px;
  }

  &::after {
    right: -15px;
  }
`;

const AirportCode = styled.span`
  margin-top: 15px;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

function Laggage(props) {
  return (
    <LaggageIcons carryon={props.carryon} laggage={props.laggage}>
      {!props.carryon && !props.laggage && <span>Нет багажа</span>}
    </LaggageIcons>
  );
}

class Card extends React.Component {
  render() {
    return (
      <CardWrap>
        <LeftCol>
          <LaggageWrap>
            <Laggage
              carryon={this.props.carryon}
              laggage={this.props.laggage}
            />
          </LaggageWrap>
          <Button>Купить за {this.props.price} ₽</Button>
          <PlaceToBuy>на Clickavia</PlaceToBuy>
        </LeftCol>
        <RightCol>
          <FlexWrapper jc="space-between" ai="flex-start">
            <AirLogo src={rusAir} srcSet={`${rusAir2x} 2x`} />
            {this.props.charter && <CharterPic>чартер</CharterPic>}
          </FlexWrapper>
          <FlexWrapper className="search__card_flight">
            <FlightAttrs departure={this.props.departure} />
            <FlightDurWrap>
              <FlightDuration>
                Всего: {this.props.departure.durTo}
              </FlightDuration>
              <FlightDurGraph />
              <FlexWrapper jc="space-between">
                <AirportCode>mow</AirportCode>
                <AirportCode>bcn</AirportCode>
              </FlexWrapper>
            </FlightDurWrap>
            <FlightAttrs arrival={this.props.arrival} />
          </FlexWrapper>
          <FlexWrapper className="search__card_flight">
            <FlightAttrs departure={this.props.departure} return />
            <FlightDurWrap>
              <FlightDuration>
                Всего: {this.props.departure.durFrom}
              </FlightDuration>
              <FlightDurGraph />
              <FlexWrapper jc="space-between">
                <AirportCode>bcn</AirportCode>
                <AirportCode>mow</AirportCode>
              </FlexWrapper>
            </FlightDurWrap>
            <FlightAttrs arrival={this.props.arrival} return />
          </FlexWrapper>
        </RightCol>
        <OptionPanel />
      </CardWrap>
    );
  }
}

export default Card;
