import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import { lists } from "./lists";
import vk from "./vk.svg";
import fb from "./fb.svg";
import inst from "./inst.svg";
import twit from "./twit.svg";
import viber from "./viber.svg";
import apple from "./apple.svg";
import play from "./play.svg";
import wp from "./wp.svg";

const List = styled.ul`
  margin: 0;
  padding: 0;
  flex: 1 15%;

  &:nth-child(5) > li:last-child,
  &:last-child > li:last-child {
    display: none;
  }

  @media (max-width: 992px) {
    flex-basis: 27%;

    &:nth-child(-n + 3) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 450px) {
    flex-basis: 45%;
  }
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const ListItem = styled.li`
  display: block;
  margin-bottom: 12px;
  line-height: 16px;
  font-size: 12px;
  text-decoration: none;
  color: #5b5b5c;

  &:last-child {
    margin-bootom: 0;
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;

    & span {
      text-transform: lowercase;
    }
  }
`;

const FlexList = styled.ul`
  display: flex;
  flex-wrap: wrap
  padding: 0;
  margin: 0;

  &:first-child {
    margin-bottom: 20px;
  }
`;

const FlexItem = styled.li`
  position: relative;
  display: block;
  padding: 5px 0;
  padding-left: ${props => (props.icon ? "19px" : 0)};
  font-size: 12px;
  text-decoration: none;
  color: #5b5b5c;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 0;
    top: 5px;
    background: url(${props => props.icon}) no-repeat;
  }
`;

const SearchHotels = styled.p`
  margin-top: 30px;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;

  @media (max-width: 450px) {
    text-align: center;
  }
`;

const Button = styled.button`
  width: 125px;
  padding: 6px 6px 6px 40px;
  font-weight: bold;
  line-height: 15px;
  font-size: 12px;
  color: #ffffff;
  background: #1e292d url(${props => props.icon}) 12px 10px no-repeat;
  border-radius: 5px;
  border: none;

  & small {
    font-weight: normal;
    line-height: 15px;
    font-size: 9px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 450px) {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;

    &:not(:last-child) {
      margin-right: auto;
    }
  }
`;

const Copy = styled.p`
  margin-top: 30px;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: right;
  color: #5b5b5c;

  @media (max-width: 992px) {
    text-align: left;
  }

  @media (max-width: 450px) {
    text-align: center;
  }
`;

export default function Footer(props) {
  return (
    <Grid>
      <FlexWrapper
        className="footer_lists"
        // jc="space-between"
        mt="45px"
        mb="70px"
        wrap="wrap"
      >
        {lists.map(list => (
          <List>
            <Title>{list.title}</Title>
            {list.items.map(item => <ListItem>{item}</ListItem>)}
            <ListItem>
              Все <span>{list.title}</span> &#10141;
            </ListItem>
          </List>
        ))}
      </FlexWrapper>
      <Row>
        <Col lg={7}>
          <FlexList>
            <FlexItem>О компании</FlexItem>
            <FlexItem>Партнёрская программа</FlexItem>
            <FlexItem>Реклама</FlexItem>
            <FlexItem>Вакансии</FlexItem>
            <FlexItem>Помощь</FlexItem>
            <FlexItem>Правила</FlexItem>
            <FlexItem>White Label авиабилеты</FlexItem>
          </FlexList>
          <FlexList className="footer_social">
            <FlexItem icon={vk}>Вконтакте</FlexItem>
            <FlexItem icon={fb}>Фейсбук</FlexItem>
            <FlexItem icon={inst}>Инстаграм</FlexItem>
            <FlexItem icon={twit}>Твиттер</FlexItem>
            <FlexItem icon={viber}>Вайбер</FlexItem>
          </FlexList>
          <SearchHotels>Поиск и бронирование отелей</SearchHotels>
        </Col>
        <Col lg={4} lgOffset={1}>
          <FlexWrapper className="footer_btnWrap">
            <Button icon={apple}>
              <small>Скачайте в</small>
              <br />App Store
            </Button>
            <Button icon={play}>
              <small>Скачайте в</small>
              <br />Google Play
            </Button>
            <Button icon={wp}>
              Windows
              <br />Phone
            </Button>
          </FlexWrapper>
          <Copy>© 2007–2018, Aviasales — дешевые авиабилеты</Copy>
        </Col>
      </Row>
    </Grid>
  );
}
