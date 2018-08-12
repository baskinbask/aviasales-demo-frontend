import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import FlexWrapper from "../common/FlexWrapper";
import Logo from "../Header/Logo";
import Input from "../Header/Input";
import Select from "../Header/Select";
import Button from "../Header/Button";

const WrapperBg = styled.div`
  min-height: 10vh;
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
          <Logo />
          <CurrencyLabel>rub</CurrencyLabel>
          <MediaQuery minWidth={577}>
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
                <Input
                  id="arrival"
                  type="text"
                  placeholder="Город прибытия"
                  city="bcn"
                  value="Барселона"
                />
                <Input
                  id="dateFrom"
                  type="text"
                  placeholder="Туда"
                  icon="calendar"
                />
                <Input
                  id="dateTo"
                  type="text"
                  placeholder="Обратно"
                  icon="calendar"
                />
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
