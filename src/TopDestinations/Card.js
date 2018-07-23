import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import TravelPoint from "./TravelPoint";

const CardWrap = styled.div`
  flex: 0 1 49%;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  cursor: pointer;

  &:nth-child(2n + 1) {
    margin-right: 15px;
  }

  & img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 992px) {
    flex-basis: 100%;

    &:nth-child(2n + 1) {
      margin-right: 0;
    }
  }
`;

const InfoWrap = FlexWrapper.extend`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px 16px;
`;

const Price = styled.p`
  margin: 0;
  line-height: 32px;
  font-size: 22px;
  text-align: right;
  color: #00bae8;

  @media (max-width: 576px) {
    line-height: 20px;
    font-size: 14px;
  }
`;

const CurrDate = styled.p`
  margin: 0;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

class Card extends React.Component {
  render() {
    return (
      <CardWrap>
        <picture>
          <source
            srcSet={`${this.props.photoTab}, ${this.props.photoTab2x} 2x`}
            media="(max-width: 992px) and (min-width: 576px)"
          />
          <img
            srcSet={`${this.props.photo2x} 2x`}
            src={this.props.photo}
            alt={this.props.city}
          />
        </picture>
        <InfoWrap d="flex">
          <TravelPoint
            flagClass="card-flag"
            country={this.props.country}
            city={this.props.city}
          />
          <div>
            <Price>Найти от {this.props.price} ₽</Price>
            <CurrDate>{this.props.date}</CurrDate>
          </div>
        </InfoWrap>
      </CardWrap>
    );
  }
}

export default Card;
