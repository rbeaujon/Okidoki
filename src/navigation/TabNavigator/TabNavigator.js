import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../screens/Home";
import Jokes from '../../screens/Jokes/Jokes'
import Activities from "../../screens/Activities";
import Dogs from "../../screens/Dogs";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Jokes" component={Jokes} />
      <Tab.Screen name="Dogs" component={Dogs} />
      <Tab.Screen name="Activities" component={Activities} />
    </Tab.Navigator>
  );
}

export default TabNavigator;