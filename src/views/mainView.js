import React, { Component } from "react";

import "../style/views/mainView/mainView.scss";
import BasicDescriptionSection from "../components/mainView/basicDescriptionSection"

class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <div className="paralax-image" ></div>
        <p id="startPictureText">LOREM</p>
        <div className="paralax-image" ></div>
        <BasicDescriptionSection/>
<div className="test">test</div>

      </div>
    );
  }
}

export default MainView;
