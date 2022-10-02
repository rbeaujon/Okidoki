import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import 'react-native-gesture-handler';
import JokesApi from '../../helper/Jokes/JokesApi';




const Jokes = (props) => {
	const [jokes, setJokes] = useState([]);
	const fetchJokes = async () => {
		const response = await JokesApi();
		if(response.status === 200){
			let data = {
				id:response.jokes.id,
				type:response.jokes.type,
				setup:response.jokes.setup,
				punchline:response.jokes.punchline
			}		
			setJokes(data);
			
		} else {
			console.warn("Jokes Loading Error " + response.status)
		}
	}
	
	useEffect(() => {
		fetchJokes();
	},[])

	const {id, type, setup, punchline} = jokes
	return (
		<View>
			<Text>{id}</Text>
			<Text>{type}</Text>
			<Text>{setup}</Text>
			<Text>{punchline}</Text>
		</View>
  )
}

export default Jokes