import React, { Component } from "react";

import "../style/views/mainView/mainView.scss";
import BasicDescriptionSection from "../components/mainView/basicDescriptionSection";
import CompanyDescriptionElement from "../components/mainView/companyDescriptionElement";

class MainView extends Component {
  render() {
    return (
      <div className="main-view">
        <div className="paralax-image" />
        <p id="startPictureText">LOREM</p>
        <div className="paralax-image" />
        <BasicDescriptionSection />
        <CompanyDescriptionElement
          title="nananan"
          text="nmonbnrnfb mirgjir"
          className="first-descr-sect"
        />{" "}
        <CompanyDescriptionElement
          title="nanacscsnan"
          text="nmonbnrnscscfb mirgjir"
          className="second-descr-sect"
        />
      </div>
    );
  }
}

export default MainView;
