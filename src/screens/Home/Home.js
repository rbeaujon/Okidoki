import {View, Text, Button, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

import 'react-native-gesture-handler';
import InfoMenu from '../../navigation/InfoMenu/InfoMenu';

const Home = (props) => {
  return (
	<View>
		<InfoMenu  navigation={props.navigation}/>
		<View  style={styles.container} >
			
			<Text style={styles.container}>Home</Text>
			
		</View>
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