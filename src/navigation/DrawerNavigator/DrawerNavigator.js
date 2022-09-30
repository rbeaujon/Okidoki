import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Screen1 from '../../screens/Screen/Screen1'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="SignOut" component={Login} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;