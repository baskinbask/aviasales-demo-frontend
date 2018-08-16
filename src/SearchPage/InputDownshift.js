import React, { Component } from "react";
import styled from "styled-components";
import Downshift from "downshift";

const items = [
  { country: "Таиланд", city: "Бангкок", code: "BKK" },
  { country: "Испания", city: "Бараселона", code: "BCN" },
  { country: "Грузия", city: "Батуми", code: "BKK" },
  { country: "Венгрия", city: "Будапешт", code: "BKK" },
  { country: "Бангладеш", city: "Дакка", code: "BKK" },
  { country: "Россия", city: "Барнаул", code: "BKK" }
];

const InputTag = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-right: 2px;
  padding: 18px 0 18px 10px;
  border: none;

  &::placeholder {
    color: #a0b0b9;
  }
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 59px;
  left: 0;
  margin-top: -5px;
  padding: 0;
  background: #fff;
`;

const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;

  &:nth-child(even) {
    background: #f4f4f4;
  }

  & i {
    font-style: normal;
    color: #a0b0b9;
  }

  & span {
    margin-left: auto;
    font-size: 12px;
    text-align: right;
    color: #a0b0b9;
  }
`;

export default class InputDown extends React.Component {
  render() {
    return (
      <Downshift
        onChange={selection => console.log(`You selected ${selection.city}`)}
        itemToString={item => (item ? item.city : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div className={this.props.className}>
            <label {...getLabelProps()} />
            <InputTag
              {...getInputProps()}
              type="text"
              placeholder="Город прибытия"
            />
            <List {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(
                      item => !inputValue || item.city.includes(inputValue)
                    )
                    .map((item, index) => (
                      <ListItem
                        {...getItemProps({
                          key: item.city,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? "lightgray" : null,
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }
                        })}
                      >
                        {item.city}, <i>{item.country}</i>
                        <span>{item.code}</span>
                      </ListItem>
                    ))
                : null}
            </List>
          </div>
        )}
      </Downshift>
    );
  }
}
