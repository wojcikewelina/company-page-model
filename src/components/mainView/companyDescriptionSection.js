import React, { Component } from "react";
import CompanyDescriptionElement from "./companyDescriptionElement";

import { getDescriptionData } from "../../service/mv_companyDescription";

export default class CompanyDescriptionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }

  componentDidMount() {
    getDescriptionData().then(result => {
      this.setState({
        allData: result
      });
    });
  }

  render() {
    const allElements = this.state.allData.map((element, i) => {
      return (
        <div>
          <CompanyDescriptionElement
            title={element.title}
            text={element.text}
            className={element.className}
            key={"el" + i}
          />
        </div>
      );
    });
    return <div className="company-description-section">{allElements}</div>;
  }
}
