import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { LoginContext } from '../../helper/Context/Context'

const InfoMenu = (props) => {
	const user = useContext(LoginContext)
  return (
	<View style={styles.container}>
		<Text>{user}</Text>
	  <Button style={styles.button} name='LogOut' title="Logout" onPress={() => props.navigation.replace('SignOut')}/>
	</View>
  )
}

export default InfoMenu

const styles = StyleSheet.create({
	container: {
	  alignItems: 'flex-end',
	  marginTop: 0,
	  padding: 0,
	},
	button: {
	  width: 250,
	  height: 80,
	  borderRadius: 15,
	  marginBottom: 100,
	  backgroundColor: '#bcbcbc',
	},
  });
