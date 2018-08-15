import React, { Component } from "react";
import styled from "styled-components";

const CounterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  color: #000;
`;

const CounterField = styled.div`
  box-sizing: border-box;
  padding-top: 8px;
  padding-left: 8px;
  min-height: 32px;
  min-width: 23px;
  text-align: center;
  border-right: 1px solid #dbdbdb;
`;

const CounterBtn = styled.button`
  display: block;
  box-sizing: border-box;
  padding-left: 8px;
  min-height: 32px;
  min-width: 23px;
  background: #fff;
  color: #dbdbdb;
  border: none;
  border-right: 1px solid #dbdbdb;
`;

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, ...props };
    this.clickIncrement = this.clickIncrement.bind(this);
    this.clickDecrement = this.clickDecrement.bind(this);
  }

  clickIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  clickDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <CounterWrap>
        <CounterBtn onClick={this.clickDecrement}>-</CounterBtn>
        <CounterField>{this.state.count}</CounterField>
        <CounterBtn onClick={this.clickIncrement}>+</CounterBtn>
      </CounterWrap>
    );
  }
}
