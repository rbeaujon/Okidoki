import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Jokes from '../../screens/Jokes/Jokes'
import Activities from "../../screens/Activities";
import Dogs from "../../screens/Dogs";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Jokes" component={Jokes} />
      <Drawer.Screen name="Dogs" component={Dogs} />
      <Drawer.Screen name="Activities" component={Activities} />
      <Drawer.Screen name="SignOut" component={Login} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;