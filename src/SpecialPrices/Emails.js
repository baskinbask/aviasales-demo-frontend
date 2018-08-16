import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FlexWrapper from "../common/FlexWrapper";
import stripBg from "./stripBg.png";
import vk from "./icons/vk.svg";
import fb from "./icons/facebook.svg";
import tw from "./icons/twitter.svg";
import rss from "./icons/rss.svg";

const StripBg = styled.div`
  width: 100%;
  height: 7px;
  margin-top: 50px;
  margin-bottom: 30px;
  background: url(${stripBg}) no-repeat;
  background-size: cover;
`;

const Desc = styled.div`
  flex-basis: 35%
  line-height: 20px;
  font-size: 16px;
  color: #5c5c5c;

  @media (max-width: 992px) {
    flex-basis: 100%;
    max-width: 50%;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 10px;

  @media (max-width: 992px) {
    flex-basis: 100%;
    margin: 20px auto;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  background: #9b9b9b;
  border-radius: 50%;

  & + div {
    margin-left: 5px;
  }

  & img {
    margin-top: 50%;
    transform: translateY(-50%);
  }
`;

const Form = styled.form`
  border: 1px solid #a0b0b9;
  border-radius: 2px;
`;

const Input = styled.input`
  padding: 7px 5px 7px 13px;
  border: none;

  @media (max-width: 360px) {
    text-align: center;
  }
`;

const Btn = styled.button`
  padding: 7px 20px;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 0 2px 2px 0
  background: #ff9241;

    @media (max-width: 360px) {
    width:100%;
  }
`;

class Emails extends React.Component {
  render() {
    return (
      <div>
        <StripBg />
        <Grid>
          <Row center="xs">
            <Col lg={10} xs={12}>
              <FlexWrapper
                className="emails-wrap"
                jc="space-between"
                wrap="wrap"
                ai="center"
              >
                <Desc>
                  <strong>Хотите знать всё о скидках на авиабилеты?</strong>
                  <br />
                  Вы можете подписаться на нашу рассылку через соцсети или по
                  электронной почте.
                </Desc>
                <IconsWrapper>
                  <Icon>
                    <img src={tw} alt="twitter" />
                  </Icon>
                  <Icon>
                    <img src={fb} alt="facebook" />
                  </Icon>
                  <Icon>
                    <img src={vk} alt="vkontakte" />
                  </Icon>
                  <Icon>
                    <img src={rss} alt="rss" />
                  </Icon>
                </IconsWrapper>
                <Form>
                  <Input id="emails" type="email" placeholder="Ваш email" />
                  <Btn type="submit">Подписаться</Btn>
                </Form>
              </FlexWrapper>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Emails;
