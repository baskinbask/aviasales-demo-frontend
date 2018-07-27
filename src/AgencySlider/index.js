import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Slider from "react-slick";
import aeroLogo from "./aeroflotLogo.png";
import s7Logo from "./s7Logo.png";
import oneTwoLogo from "./12tripLogo.png";
import koreanLogo from "./koreanLogo.png";
import israelLogo from "./israelLogo.png";

const Title = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
`;

class AgencySlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Grid>
        <Row center="xs">
          <Col lg={10}>
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агенств
            </Title>
            <Slider {...settings}>
              <div>
                <img className="slider-logo" src={aeroLogo} srcSet="" alt="" />
              </div>
              <div>
                <img className="slider-logo" src={s7Logo} srcSet="" alt="" />
              </div>
              <div>
                <img
                  className="slider-logo"
                  src={oneTwoLogo}
                  srcSet=""
                  alt=""
                />
              </div>
              <div>
                <img
                  className="slider-logo"
                  src={koreanLogo}
                  srcSet=""
                  alt=""
                />
              </div>
              <div>
                <img
                  className="slider-logo"
                  src={israelLogo}
                  srcSet=""
                  alt=""
                />
              </div>
            </Slider>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AgencySlider;
