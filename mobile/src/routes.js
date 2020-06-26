import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Details from "./pages/Details";
import Freelancers from "./pages/Freelancers";

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Freelancers" component={Freelancers} />
      <AppStack.Screen name="Detail" component={Details} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
