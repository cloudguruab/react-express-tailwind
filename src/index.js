import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.js";
import "./styles.scss";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(appRouting, root)
}