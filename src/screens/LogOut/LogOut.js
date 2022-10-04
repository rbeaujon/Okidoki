import { View } from 'react-native'
import React, { useContext } from 'react'
import { LoginContext } from '../../helper/Context/Context';

const LogOut = (props) => {
	const [user, setUser] = useContext(LoginContext);

	setUser('')

	props.navigation.replace('SignIn')
  
	return (
	<View>
	  
	</View>
  )
}

export default LogOut