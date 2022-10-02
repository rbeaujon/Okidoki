import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import 'react-native-gesture-handler';
import ApiActivities from '../../helper/Activities';


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
		<View>
			<Text>{activity}</Text>
			<Text>{type}</Text>
			<Text>{participants}</Text>
			<Text>{price}</Text>
			<Text>{link}</Text>
			<Text>{key}</Text>
			<Text>{accessibility}</Text>
		</View>
  )
}

export default Activities