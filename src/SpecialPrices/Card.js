import React, { Component } from "react";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
// import headerIcon from "./icons/headerIcon.png";

const CardWrapper = styled.div`
  display: flex;
  flex: 1 33%;
  flex-direction: column;
  max-width: 300px;
  background: #fff;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 1200px) {
    max-width: 245px;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 63px;
  padding-left: 16px;
  color: #fff;
  background: #cd2027 url(${props => props.icon}) 95% 50% no-repeat;

  & p {
    margin: 0;

    @media (max-width: 992px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 18px 16px;

  @media (max-width: 992px) {
    padding: 18px 8px;
  }
`;

const AirLogo = styled.img`
  @media (max-width: 1200px) {
    width: 100px;
  }
`;

const Btn = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 10px 0;
  text-align: center;
  color: #d93533;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
`;

const Price = styled.p`
  margin: 0;
  margin-bottom: 10px;
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
`;

const Remain = styled.span`
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
`;

const Content = styled.p`
  line-height: 16px;
  font-size: 12px;
  text-align: left;
  color: #242424;
`;

class Card extends React.Component {
  render() {
    return (
      <CardWrapper>
        <Header icon={this.props.icon}>
          {this.props.city && (
            <p>
              В {this.props.city} от {this.props.price} ₽
            </p>
          )}
          {this.props.title && <p>{this.props.title}</p>}
        </Header>
        <ContentWrap>
          <FlexWrapper jc="space-between" ai="center">
            <AirLogo src={this.props.logo} alt="" />
            <div>
              <Price>
                <small>от </small>
                {this.props.price} ₽
              </Price>
              <Remain>Осталось {this.props.remain} дней</Remain>
            </div>
          </FlexWrapper>
          <Content>
            Из Москвы в США от {this.props.price} рублей! Специальное
            предложение от авиакомпании {this.props.air}
          </Content>
          <Btn type="button">Узнать подробности</Btn>
        </ContentWrap>
      </CardWrapper>
    );
  }
}

export default Card;
