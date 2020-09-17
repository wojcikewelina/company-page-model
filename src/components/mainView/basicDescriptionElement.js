import React from "react";

import "../../style/views/mainView/basicDescriptionElement"

export default function BasicDescriptionElement(props) {
  return (
    <div className="mv-basic-description-el">
      <img src={props.src} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
