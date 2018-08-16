import React, { Component } from "react";
import styled from "styled-components";

const ListWrap = styled.ul`
  margin-top: 24px;
  margin-bottom: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  text-align: left;

  & + li {
    margin-top: 20px;
  }

  & span {
    display: inline-block;
    margin-left: auto;
    color: #00bae8;
  }
`;

class List extends React.Component {
  render() {
    return (
      <ListWrap>
        {this.props.away.map(item => (
          <ListItem>
            Из {item.from}
            <span>от {item.price} ₽</span>
          </ListItem>
        ))}
      </ListWrap>
    );
  }
}

export default List;
