import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import 'react-native-gesture-handler';
import ApiDogs from '../../helper/Dogs';


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
		<View>
			<Text>{message}</Text>
			<Text>{status}</Text>
		</View>
  )
}

export default Dogs