import React, { Component } from "react";
import styled from "styled-components";
import Icon from "./Icons";

const Wrapper = styled.div`
  flex-basis: 13%;

  @media (max-width: 576px) {
    flex-basis: 27%;
    margin-bottom: 30px;
  }
`;

const Title = styled.p`
  max-width: 70px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: ${props => (props.active ? "#000;" : "#00ace2;")};
  border-bottom: ${props => (props.active ? "1px solid #00ace2;" : "none;")};
  text-transform: uppercase;
  cursor: pointer;
`;

const catProps = [
  { icon: "globe", title: "Куда угодно", active: true },
  { icon: "tree", title: "Солнце и море", active: false },
  { icon: "bag", title: "Шоппинг, город", active: false },
  { icon: "culture", title: "Культура и история", active: false },
  { icon: "drink", title: "Ночная жизнь", active: false },
  { icon: "baby", title: "Отдых с детьми", active: false }
];

class Category extends React.Component {
  render() {
    return (
      <Wrapper active={this.props.active}>
        <Icon name={this.props.icon} active={this.props.active} />
        <Title active={this.props.active}>{this.props.title}</Title>
      </Wrapper>
    );
  }
}

export { catProps };
export default Category;
