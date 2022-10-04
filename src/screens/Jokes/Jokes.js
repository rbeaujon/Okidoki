import { View, Text, Image,  StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import 'react-native-gesture-handler';
import JokesApi from '../../helper/Jokes/JokesApi';
import bg from '../../../assets/images/minion.jpg';


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
		<View style={styles.container}>
			<View style={styles.data}>
				<Text style={styles.id}>ID: {id}</Text>
				<Text style={styles.type}>Type: {type}</Text>
				<Text style={styles.setup}>Setup: {setup}</Text>
				<Text style={styles.punchline}>{punchline}</Text>
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
	  	height: '75%',
	  	justifyContent: 'center',
	  	alignItems: 'center',
	  	marginTop: '1%',
	},
	data: {
		padding:20,
	},
	id: {
		width: '100%',
		textAlign: 'center',
		fontSize: 20,
		marginTop: 10,
	},
	type: {
		width: '100%',
		textAlign: 'center',
		fontSize: 20,
	},
	setup: {
		width: '100%',
		textAlign: 'justify',
		fontSize: 30,
	},
	punchline: {
		width: '100%',
		textAlign: 'justify',
		fontSize: 10,

	},
  });


export default Jokes