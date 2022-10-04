import { View, Text, Image,  StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import 'react-native-gesture-handler';
import ApiDogs from '../../helper/Dogs';
import bg from '../../../assets/images/dogPitBull.jpg';


const Dogs = (props) => {
	const [dogs, setDogs] = useState([]);
	const fetchDogs = async () => {
		const response = await ApiDogs();
		if(response.status === 200){
			let data = {
				message:response.dogs.message,
				status:response.dogs.status
			}		
			setDogs(data);
			
		} else {
			console.warn("Dogs Loading Error " + response.status)
		}
	}
	
	useEffect(() => {
		fetchDogs();
	},[])

	const {message, status} = dogs
	return (
		<View style={styles.container}>
			<View style={styles.data}>
				<Text style={styles.message}>{message}</Text>
				<Text style={styles.status}>{status}</Text>
			</View>
			<View>
				<Image source={bg} style={styles.bg} />
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
	  	height: '65%',
	  	justifyContent: 'center',
	  	alignItems: 'center',
	  	marginTop: '20%',
	},
	data: {
		padding:50,
	},
	message: {
		width: '100%',
		textAlign: 'justify',
		fontSize: 30,
		marginTop: 10,
		color: '#5e597e'
	},
	status: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
		color: '#40836c'
	},
  });

export default Dogs