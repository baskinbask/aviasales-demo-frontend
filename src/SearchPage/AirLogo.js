import React, { Component } from "react";

import rus from "./icons/rus.png";
import rus2x from "./icons/rus@2x.png";
import rusMini from "./icons/rusMini.png";
import rusMini2x from "./icons/rusMini@2x.png";
import nord from "./icons/nord.png";
import nord2x from "./icons/nord@2x.png";
import nord1 from "./icons/nord1.png";
import nord1_2x from "./icons/nord1@2x.png";
import fly from "./icons/fly.png";
import fly2x from "./icons/fly@2x.png";
import red from "./icons/red.png";
import red2x from "./icons/red@2x.png";
import redMini from "./icons/redMini.png";
import redMini2x from "./icons/redMini@2x.png";
import hzMini from "./icons/hzMini.png";
import hzMini2x from "./icons/hzMini@2x.png";
import styled from "../../node_modules/styled-components";

const AirLogoWrap = styled.div`
  display: inline-block;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

function AirLogo(props) {
  let img;

  switch (props.airline) {
    case "rus":
      img = <img src={rus} srcSet={`${rus2x} 2x`} alt="" />;
      break;
    case "rusMini":
      img = <img src={rusMini} srcSet={`${rusMini2x} 2x`} alt="" />;
      break;
    case "nord":
      img = <img src={nord} srcSet={`${nord2x} 2x`} alt="" />;
      break;
    case "nord1":
      img = <img src={nord1} srcSet={`${nord1_2x} 2x`} alt="" />;
      break;
    case "red":
      img = <img src={red} srcSet={`${red2x} 2x`} alt="" />;
      break;
    case "redMini":
      img = <img src={redMini} srcSet={`${redMini2x} 2x`} alt="" />;
      break;
    case "hzMini":
      img = <img src={hzMini} srcSet={`${hzMini2x} 2x`} alt="" />;
      break;
    case "fly":
      img = <img src={fly} srcSet={`${fly2x} 2x`} alt="" />;
      break;
    default:
      img = true;
  }

  return <AirLogoWrap>{img}</AirLogoWrap>;
}

export default AirLogo;
