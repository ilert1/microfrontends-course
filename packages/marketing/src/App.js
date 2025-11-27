import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export function App() {
  return (
    <div>
      <StylesProvider injectFirst>
        <Router>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
