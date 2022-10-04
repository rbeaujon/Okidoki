import { View, Text, Image,  StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import 'react-native-gesture-handler';
import ApiActivities from '../../helper/Activities';
import bg from '../../../assets/images/activities.jpg';


const Activities = (props) => {
	const [activities, setActivities] = useState([]);
	const fetchActivities = async () => {
		const response = await ApiActivities();
		if(response.status === 200){
			let data = {
				activity:response.activities.activity,
				type:response.activities.type,
				participants:response.activities.participants,
				price:response.activities.price,
				link:response.activities.link,
				key:response.activities.key,
				accessibility:response.activities.accessibility
			}		
			setActivities(data);
			
		} else {
			console.warn("Activities Loading Error " + response.status)
		}
	}
	
	useEffect(() => {
		fetchActivities();
	},[])

	const {activity, type, participants, price, link, key, accessibility} = activities
	return (
		<View style={styles.container}>

			<View>
				<Image source={bg} style={styles.bg} />
				<View style={styles.data}>
					<Text style={styles.activityTitle}>Activity:</Text>
					<Text style={styles.activity}>{activity}</Text>
					<Text style={styles.type}>{type}</Text>
					<Text style={styles.participants}>Participants: {participants}</Text>
					<Text style={styles.price}>Price: {price}</Text>
					{link ==="" ? "" : 	<Text style={styles.link}>Link: {link}</Text> }
					<Text style={styles.key}>Key: {key}</Text>
					<Text style={styles.accessibility}>{accessibility}</Text>
				</View>
			</View>
		</View>
  )
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	  },
	bg: {
	 	width: '100%',
	  	height: '100%',
	  	marginTop: '0%',
		paddingRight: 20,
		zIndex: 1,
		elevation: 1,
		position: 'relative',
	},
	data: {
		padding:40,
		zIndex: 100,
		elevation: 100,
		marginTop: 180,
		position: 'absolute',
	},
	activityTitle: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
		color: '#fff',
	},
	activity: {
		width: '100%',
		textAlign: 'left',
		fontSize: 30,
		color: '#fff',
	},
	type: {
		width: '100%',
		textAlign: 'left',
		fontSize: 15,
		color: '#dfd8d2',
	},
	participants: {
		width: '100%',
		textAlign: 'justify',
		fontSize: 20,
		marginTop: 20,
		color: '#fff',
	},
	price: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
		color: '#fff',
	},
	link: {
		width: '100%',
		textAlign: 'justify',
		fontSize: 20,
		color: '#fff'
	},
	key: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
		color: '#fff',
	},
	accessibility: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
		color: '#fff',
	},
  });

export default Activities