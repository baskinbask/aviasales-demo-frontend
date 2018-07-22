import React, { Component } from "react";
import styled from "styled-components";

import ruFlag from "./img/flags/flag_ru.png";
import esFlag from "./img/flags/flag_es.png";
import mdFlag from "./img/flags/flag_md.png";
import amFlag from "./img/flags/flag_am.png";

function Flag(props) {
  let img;

  switch (props.name) {
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

  return <div>{img}</div>;
}

export default Flag;
