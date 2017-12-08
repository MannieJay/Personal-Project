import React from "react";
import { Route, Switch } from "react-router";

import LoginPage from "../login/LoginPage";
import WelcomePage from "../welcome/WelcomePage";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/welcome" component={WelcomePage} />
    </Switch>
  );
};

export default Routes;