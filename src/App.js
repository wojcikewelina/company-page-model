import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.scss";

import Header from "./components/header/header";
import MainView from "./views/mainView";
import AboutView from "./views/aboutView";
import OfferView from "./views/offerView";
import ContactView from "./views/contactView";
import Footer from "./components/footer";
import RealisationsView from "./views/realisationsView";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="page-content">
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route path="/about" component={AboutView} />
            <Route path="/offer" component={OfferView} />
            <Route path="/contact" component={ContactView} />
            <Route path="/realisations" component={RealisationsView} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
