import { View, Text, Image,  StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

import 'react-native-gesture-handler';
import InfoMenu from '../../navigation/InfoMenu/InfoMenu';
import bg from '../../../assets/images/welcome.jpg';

const Home = (props) => {
  return (
	<View style={styles.container}>
		<View>
			<InfoMenu  navigation={props.navigation}/>
		</View>
		<View> 
			<Image source={bg} style={styles.bg} /> 
		</View> 
		<View >
			<Text style={styles.info}>Some information can be here</Text>
		</View>
		
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff'
	},
	bg: {
		width: '100%',
	 	height: '40%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '100%',
	   	zIndex: 1,
	   	elevation: 1,
	   	position: 'relative',
   	},
   	data: {
		padding:50,
		zIndex: 2,
		elevation: 2,
		marginTop: 10,
		position: 'absolute',
	},
	// info: {
	// 	width: '100%',
	// 	textAlign: 'left',
	// 	fontSize: 20,
	// 	marginTop: 100,
	// 	padding:10,
	// 	color: '#000',
	// },
  });

export default Home