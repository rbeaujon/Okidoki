import { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator/TabNavigator';
import Login from '../screens/Login';
import { LoginContext } from '../helper/Context/Context';

const Stack = createStackNavigator();

const Navigation = () => {

  const [user, setUser] = useState('');

  return (
    <LoginContext.Provider value={[user, setUser]}>
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
         <Stack.Screen name="SignIn" component={Login} />
         <Stack.Screen name="SignOut" children={() => <Login Logout={true} />}  />
         <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    </LoginContext.Provider>
  )
}

export default Navigation;