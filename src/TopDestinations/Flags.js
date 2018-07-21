import React, { Component } from "react";
import styled from "styled-components";

import ruFlag from "./img/flags/flag_ru.png";
import esFlag from "./img/flags/flag_es.png";
import mdFlag from "./img/flags/flag_md.png";
import amFlag from "./img/flags/flag_am.png";

const FlagStyled = styled.div`
  /*width: 30px;
  height: 30px;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 50%;*/
`;

class Flag extends React.Component {
  render() {
    let img;

    switch (this.props.name) {
      case "Россия":
        img = <img src={ruFlag} alt="" />;
        break;
      case "Испания":
        img = <img src={esFlag} alt="" />;
        break;
      case "Молдова":
        img = <img src={mdFlag} alt="" />;
        break;
      case "Армения":
        img = <img src={amFlag} alt="" />;
        break;
      default:
        img = true;
    }

    return <FlagStyled>{img}</FlagStyled>;
  }
}

export default Flag;
