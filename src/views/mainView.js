import React, { Component } from "react";

import "../style/views/mainView/mainView.scss";
import BasicDescriptionSection from "../components/mainView/basicDescriptionSection";
import CompanyDescriptionSection from "../components/mainView/companyDescriptionSection";

class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <div className="paralax-image" />
        <p id="startPictureText">LOREM</p>
        <div className="paralax-image" />
        <BasicDescriptionSection />
        <CompanyDescriptionSection/>        
      </div>
    );
  }
}

export default MainView;
