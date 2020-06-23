import React from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "./pages/Auth";
import Logon from "./pages/Logon";
import NewFreelancer from "./pages/NewFreelancer";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Logon} />
    <Route path="/register" component={Register} />
    <Auth path="/freelancer/new" children={<NewFreelancer />} />
    <Auth path="/profile" children={<Profile />} />
  </Switch>
);

export default Routes;
