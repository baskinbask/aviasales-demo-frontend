import React, { Component } from "react";

import ruFlag from "./flags/flag_ru.png";
import esFlag from "./flags/flag_es.png";
import mdFlag from "./flags/flag_md.png";
import amFlag from "./flags/flag_am.png";

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

  return <div className={props.className}>{img}</div>;
}

export default Flag;
