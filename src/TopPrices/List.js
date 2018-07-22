import React, { Component } from "react";
import styled from "styled-components";
import { listFrom } from "../common/listFrom";

const ListWrap = styled.div`
  flex: 1 33%;
  padding: 33px;

  &:not(:last-child) {
    border-right: 1px dashed #afbec6;
  }
`;

const ListItem = styled.li`
  line-height: 20px;
  font-size: 14px;

  & span {
    color: #00bae8;
  }
`;

class List extends React.Component {
  render() {
    return (
      <ul>
        <ListItem key={this.props.key}>
          Из{this.props.from}
          <span>{this.props.price}</span>
        </ListItem>
      </ul>
    );
  }
}

export default List;
