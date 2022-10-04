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
			<InfoMenu style={styles.menu} navigation={props.navigation}/>
			<Image source={bg} style={styles.bg} />
			
			<View style={styles.data}>
				<Text style={styles.info}>Some information can be here</Text>
			</View>
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
	menu: {
		padding:40,
		fontSize: 20,
		position: 'absolute',
	},
   	data: {
		padding:50,
		zIndex: 100,
		elevation: 100,
		marginTop: 10,
		position: 'absolute',
	},
	logo: {
	  width: 250,
	  height: 80,
	  borderRadius: 15,
	  marginBottom: 100,
	},
	info: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
		marginTop: 100,
		padding:10,
		color: '#000',
	},
  });

export default Home