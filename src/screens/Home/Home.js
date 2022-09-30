import {View, Text, Button, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

import 'react-native-gesture-handler';

const Home = (props) => {

  return (
	<View  style={styles.container} >
	
		<Text style={styles.container}>Home</Text>
	  	<CustomButton name='LogOut' onPress={() => props.navigation.replace('SignIn')}/>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
	  alignItems: 'center',
	  marginTop: 20,
	  padding: 50,
	},
	logo: {
	  width: 250,
	  height: 80,
	  borderRadius: 15,
	  marginBottom: 100,
	},
  });

export default Home