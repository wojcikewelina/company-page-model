import React from "react";

export default function BasicDescriptionElement(props) {
  return (
    <div className="mv-basic-description-el">
      <img src={props.src} />
      <h3>{props.title}</h3>
      <article>{props.text}</article>
    </div>
  );
}
