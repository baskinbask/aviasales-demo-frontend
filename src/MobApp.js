import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "./common/FlexWrapper";

import iphone from "./common/iphone.png";
import iphoneMob from "./common/iphoneMob.png";
import star from "./common/star.svg";
import halfStar from "./common/halfStar.svg";
import apple from "./common/apple.svg";
import android from "./common/android.svg";
import wp from "./common/wp.svg";

const WrapperBg = styled.div`
  margin-top: 40px;
  background: linear-gradient(163.59deg, #00b0de 0%, #196ebd 100%);
`;

const Iphone = styled.picture`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  & img {
    display: inherit;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Rating = styled.div`
  margin-bottom: 45px;

  & img:not(:last-child) {
    margin-left: 5px;
  }

  & span {
    display: inline-block;
    margin-left: 5px;
    line-height: 20px;
    font-size: 14px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 55px;
  }
`;

const AppLink = styled.a`
  position: relative;
  padding-left: 23px;
  line-height: 24px;
  font-size: 14px;
  text-decoration: none;
  color: #ffffff;

  &:not(:last-child) {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #ccc;
  }

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 23px;
    top: 0;
    left: 0;
    background: url(${props => props.icon}) no-repeat;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;

    &:not(:last-child) {
      border-right: none;
    }
  }
`;

export default function MobApp(props) {
  return (
    <WrapperBg>
      <Grid>
        <Row>
          <Col
            lg={3}
            md={4}
            xs={12}
            lgOffset={1}
            style={{ position: "relative" }}
          >
            <Iphone>
              <source srcSet={iphoneMob} media="(max-width: 768px)" />
              <img src={iphone} alt="" />
            </Iphone>
          </Col>
          <Col lg={7} md={8} xs={12} className="mobApp-wrapper">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={halfStar} alt="" />
              <span>Более 103 000 оценок</span>
            </Rating>
            <div className="mobAppLinks-wrapper">
              <AppLink href="#" icon={apple}>
                iPhone или iPad
              </AppLink>
              <AppLink href="#" icon={android}>
                Android
              </AppLink>
              <AppLink href="#" icon={wp}>
                Windows Phone
              </AppLink>
            </div>
          </Col>
        </Row>
      </Grid>
    </WrapperBg>
  );
}
