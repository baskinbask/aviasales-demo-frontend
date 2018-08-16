import React, { Component } from "react";
import styled from "styled-components";
import Flag from "./Flags";

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

  @media (max-width: 576px) {
    line-height: 20px;
    font-size: 16px;
  }
`;

const Subtitle = styled.span`
  line-height: 20px;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
  color: #a0b0b9;
`;

class TravelPoint extends React.Component {
  render() {
    return (
      <GeoWrap>
        <Flag className={this.props.flagClass} name={this.props.country} />
        <div>
          <Title>{this.props.city}</Title>
          <Subtitle>{this.props.country}</Subtitle>
        </div>
      </GeoWrap>
    );
  }
}

export default TravelPoint;
export { GeoWrap };
