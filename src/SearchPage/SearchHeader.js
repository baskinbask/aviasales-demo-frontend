import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import FlexWrapper from "../common/FlexWrapper";
import Logo from "../Header/Logo";
import Input from "../Header/Input";
import Select from "../Header/Select";
import Button from "../Header/Button";
import back from "./icons/back.svg";
import DateInput from "./DateInput";
import InputDown from "./InputDownshift";

const WrapperBg = styled.div`
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );
`;

const CurrencyLabel = styled.div`
  position: absolute;
  right: 8px;
  top: 10px;
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const MobHeaderText = styled.p`
  position: relative;
  margin: 0;
  padding: 10px 0;
  padding-left: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  & p {
    margin: 0;
    font-size: 12px;
  }

  &::before {
    position: absolute;
    top: 20px;
    left: 6px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(${back}) no-repeat;
  }
`;

const FluidGrid = styled(Grid)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

class SearchHeader extends React.Component {
  render() {
    return (
      <WrapperBg>
        <FluidGrid>
          <MediaQuery maxWidth={576}>
            <MobHeaderText>
              Москва - Барселона
              <p>24 фев — 3 март, 1 пассажир</p>
            </MobHeaderText>
          </MediaQuery>
          <CurrencyLabel>rub</CurrencyLabel>
          <MediaQuery minWidth={577}>
            <Logo />
            <Row>
              <FlexWrapper className="search__header_wrapper">
                <Input
                  id="departure"
                  type="text"
                  placeholder="Город отправления"
                  icon="arrow"
                  city="mow"
                  value="Москва"
                />
                <InputDown className="downshift-input" />
                <DateInput icon="calendar" />
                <Select
                  className="search__header_select"
                  id="select"
                  value="1 пассажир"
                  stage="эконом"
                />
                <Button
                  className="search__header_btn"
                  type="submit"
                  value="Найти билеты"
                />
              </FlexWrapper>
            </Row>
          </MediaQuery>
        </FluidGrid>
      </WrapperBg>
    );
  }
}

export default SearchHeader;
