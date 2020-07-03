import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Logon from "../pages/Logon";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component={Register} />
      <Route path="*" children={<Redirect to="/" />} />
    </Switch>
  );
}

export default AppRoutes;
