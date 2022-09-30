import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator/TabNavigator';
import Login from '../screens/Login';


const Stack = createStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="SignIn" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Navigation;