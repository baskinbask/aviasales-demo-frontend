import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import Flag from "./Flags";

const CardWrap = styled.div`
  flex: 0 1 49%;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;

  &:nth-child(2n + 1) {
    margin-right: 15px;
  }

  & img {
    border-radius: 8px 8px 0 0;
  }
`;

const InfoWrap = FlexWrapper.extend`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px 16px;
`;
const GeoWrap = styled.div`
  display: flex;
  text-align: left;
`;
const Title = styled.p`
  margin: 0;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  text-align: left;
  color: #5b5b5c;
`;
const Subtitle = styled.span`
  line-height: 20px;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
  color: #a0b0b9;
`;
const Price = styled.p`
  margin: 0;
  line-height: 32px;
  font-size: 22px;
  text-align: right;
  color: #00bae8;
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
        <img
          src={this.props.photo}
          srcSet={this.props.photo2x}
          width="509"
          height="212"
          alt={this.props.city}
        />
        <InfoWrap d="flex">
          <GeoWrap>
            <Flag name={this.props.country} />
            <div>
              <Title>{this.props.city}</Title>
              <Subtitle>{this.props.country}</Subtitle>
            </div>
          </GeoWrap>
          <div>
            <Price>Найти от {this.props.price}₽</Price>
            <CurrDate>{this.props.date}</CurrDate>
          </div>
        </InfoWrap>
      </CardWrap>
    );
  }
}

export default Card;
