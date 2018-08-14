import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";

import FlightAttrs from "./FlightAttrs";
import AirLogo from "./AirLogo";
import carryOn from "./icons/laggageS.svg";
import laggage from "./icons/laggageL.svg";
import backArrow from "./icons/returnArr.svg";
import plane from "./icons/planeUp.svg";
import drop from "./icons/drop.svg";

const CardWrap = styled.div`
  ${"" /* max-width: 718px; */} margin-bottom: 20px;
  display: flex;
  border-radius: 4px;
  background: #fff;
`;

const LeftCol = styled.div`
  position: relative;
  padding: 10px 23px;
  padding-top: 0;
`;

const RightCol = styled.div`
  position: relative;
  width: 509px;
  padding: 16px;
  border-left: 1px solid #ddd;

  &::after {
    position: absolute;
    right: 15px;
    top: 18px;
    width: 17px;
    height: 14px;
    margin-left: 10px;
    content: "";
    background: url(${backArrow}) no-repeat;
  }
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
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 45px;
  justify-content: ${props => (props.double ? "space-around" : "center")};
`;

const LaggageIcons = styled.div`
  position: relative;
  width: 50%;
  min-height: 50px;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  color: #9ab0b9;
  background: ${props => (props.double ? "#F8FBFB" : "#fff")};
  border-bottom: ${props => (props.double ? "1px solid #eee" : "none")};
  border-right: ${props => (props.double ? "1px solid #eee" : "none")};
  border-radius: 4px 0 0 0;

   &::before {
    position: absolute;
    content: "${props => (props.carryon ? props.carryon : "X")}";
    padding-top: 7px;
    width: 17px;
    height: 23px;
    right: 30%;
    top: 8px;
    color: ${props => (props.carryon ? "#9ab0b9;" : "red;")};
    background: url(${laggage}) no-repeat;
  }

  &::after {
    position: absolute;
    content: "${props => (props.laggage ? props.laggage : "X")}";
    padding-top: 7px;
    width: 20px;
    height: 20px;
    left: 30%;
    top: 8px;
    color: ${props => (props.laggage ? "#9ab0b9;" : "red;")};
    background: url(${carryOn}) no-repeat;
  }

  & p {
    margin: 0;
    margin-top: 25px;
  }
`;

const TicketRemains = styled.p`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;
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

const PlaceToBuyAdditional = styled.div`
  display: flex;
  font-size: 12px;
  color: #59bce5;

  & p {
    margin: 0;

    &:nth-child(2) {
      margin-top: 5px;
      margin-left: auto;
    }
  }
`;

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
`;

const FlightDurWrap = styled.div`
  width: 100%;
  flex: 1;
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
    <LaggageIcons
      carryon={props.carryon}
      laggage={props.laggage}
      double={props.double}
    >
      {!props.carryon && !props.laggage && <p>Нет багажа</p>}
    </LaggageIcons>
  );
}

class Card extends React.Component {
  render() {
    return (
      <CardWrap>
        <div>
          <div>
            <LaggageWrap
              double={this.props.carryon2 && this.props.laggage2 ? true : false}
            >
              <Laggage
                double={
                  this.props.carryon2 && this.props.laggage2 ? true : false
                }
                carryon={this.props.carryon}
                laggage={this.props.laggage}
              />
              {this.props.carryon2 &&
                this.props.laggage2 && (
                  <Laggage
                    carryon={this.props.carryon2}
                    laggage={this.props.laggage2}
                  />
                )}
            </LaggageWrap>
            {this.props.remains &&
              this.props.remains < 10 && (
                <TicketRemains>
                  осталось {this.props.remains} билета
                </TicketRemains>
              )}
          </div>
          <LeftCol>
            <Button>Купить за {this.props.price} ₽</Button>
            <PlaceToBuy>на {this.props.aggrigate}</PlaceToBuy>
            {this.props.aggrigate2 && (
              <PlaceToBuyAdditional>
                <p>{this.props.aggrigate2.name}</p>
                <p>{this.props.aggrigate2.price} ₽</p>
              </PlaceToBuyAdditional>
            )}
            {this.props.aggrigate3 && (
              <PlaceToBuyAdditional>
                <p>{this.props.aggrigate3.name}</p>
                <p>{this.props.aggrigate3.price} ₽</p>
                <br />
              </PlaceToBuyAdditional>
            )}
            {this.props.aggrigate3 && (
              <p
                style={{
                  marginTop: "20px",
                  color: "#59BCE5",
                  fontSize: "12px",
                  textAlign: "center"
                }}
              >
                + Ещё 3 предложения
              </p>
            )}
          </LeftCol>
        </div>
        <RightCol>
          <FlexWrapper jc="space-between" ai="flex-start">
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
                Всего: {this.props.arrival.durFrom}
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
