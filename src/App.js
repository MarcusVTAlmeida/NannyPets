import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator } from "./components/MainStackNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default App;

