import React from "react";
import Header from "./components/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./views/mainView"
import AboutView from "./views/aboutView"
import ContactView from "./views/contactView"

export default function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/about" component={AboutView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}
