import React from "react";
import "../../style/views/mainView/companyDescriptionElement";



export default function CompanyDescriptionElement(props) {
  const { className, title, text } = props;
  return (
    <section className={"company-description-element " + className}>
      <div className="mv-descript-img" />
      <div className="mv-descript-text">
        <h2>{title}</h2>
        <p>
          {text}
        </p>
      </div>
    </section>
  );
}
