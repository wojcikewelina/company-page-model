import React, { Component } from "react";
import BasicDescriptionElement from "./basicDescriptionElement";

import "../../style/views/mainView/basicDescriptionSection"

import { getData } from "../../service/mv_basicDescription";

export default class BasicDescriptionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }

  componentDidMount() {
    getData().then(result => {
      this.setState({
        allData: result
      });
    });
  }


  render() {
   const allElements = this.state.allData.map((element, i) => {
    return (
      <div>
        <BasicDescriptionElement
          src={element.src}
          title={element.title}
          text={element.text}
          key={"el"+i}
        />
      </div>
    );
  });
    return (
      <div className="basic-description-section">
        {allElements}
      </div>
    );
  }
}
