import React, { Component } from "react";
import BasicDescriptionElement from "./basicDescriptionElement";

import { getData } from "../../service/mv_basicDescription";

export default class BasicDescriptionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }

  componentDidMount() {
    getData()
      .then(result => {
        this.setState({
          allData: result
        });
      })
  }



  render() {
    return (
      <div>
        Tu będzie troszkę kontentu
        <BasicDescriptionElement />
      </div>
    );
  }
}
