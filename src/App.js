import React from "react";
import Header from "./components/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./views/mainView"
import AboutView from "./views/aboutView"
import OfferView from "./views/offerView"
import ContactView from "./views/contactView"

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/about" component={AboutView} />
          <Route path="/offer" component={OfferView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}
