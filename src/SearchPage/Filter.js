import React, { Component } from "react";
import styled from "styled-components";
import FilterTransfers from "./FilterTransfers";
import FilterDeparture from "./FilterDeparture";
import FilterAirlines from "./FilterAirlines";
import FilterBlank from "./FilterBlank";

import clear from "./icons/clear.svg";

const FilterWrapper = styled.section`
  position: relative;
  padding: 16px;
  background: #fff;
  border-radius: 4px;

  &::after {
    position: absolute;
    top: 16px;
    right: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(${clear}) no-repeat;
    cursor: pointer;
  }
`;

const ClearFilters = styled.p`
  position: relative;
  margin-bottom: 0;
  line-height: 32px;
  font-size: 12px;
  text-transform: uppercase;
  color: #00bde4;

  &::after {
    position: absolute;
    top: 8px;
    right: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(${clear}) no-repeat;
    cursor: pointer;
  }
`;

class Filter extends React.Component {
  render() {
    return (
      <FilterWrapper>
        <FilterTransfers title="Пересадки" />
        <FilterDeparture title="Время вылета и прибытия" />
        <FilterBlank title="Багаж" />
        <FilterBlank title="Длительность пересадки" />
        <FilterDeparture title="Время в пути" duration />
        <FilterAirlines title="Авиакомпании" count="43" />
        <FilterBlank title="Аэропорты" count="55" />
        <FilterBlank title="Аэропорты пересадки" count="33" />
        <FilterBlank title="Агенства" count="27" />
        <ClearFilters>Сбросить все фильтры</ClearFilters>
      </FilterWrapper>
    );
  }
}

export default Filter;
