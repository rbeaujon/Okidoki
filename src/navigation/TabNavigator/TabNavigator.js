import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import Screen1 from '../../screens/Screen/Screen1'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="SignOut" component={Login} />
    </Tab.Navigator>
  );
}

export default TabNavigator;