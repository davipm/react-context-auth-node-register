import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Profile from "../pages/Profile";
import NewFreelancer from "../pages/NewFreelancer";

export default function AuthRoutes() {
  return (
    <Switch>
      <Route path="/profile" exact component={Profile} />
      <Route path="/freelancer/new" component={NewFreelancer} />
      <Route path="*" children={<Redirect to="/profile" />} />
    </Switch>
  );
}
