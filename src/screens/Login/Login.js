import {View, Image, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import Doit from '../../../assets/images/doit.png';
import Input from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/';
import UserApi from '../../helper/Users/'
import { LoginContext } from '../../helper/Context/Context';


const Login = (props) => {

  const [user, setUser] = useContext(LoginContext);
  const [pass, setPass] = useState('');
  
 

  const signIn = async () => {
    
    const parm =  {
      "login": user,
      "password": pass
    };
    
    const response = await UserApi(parm);
    if(response.isLogged){
        const data = response.data;
        setUser(data.user) 
        props.navigation.replace('Main');
    } else {
      console.warn("Validation Error")
    }
  }
  

  return (
    
    <View style={styles.containerLogin}>
      <Image source={Doit} style={styles.logo} />
      <Input value={user} placeholder="name" setValue={setUser} />
      <Input
        value={pass}
        placeholder="Password"
        setValue={setPass}
        secureTextEntry={true}
      />
      <CustomButton name="SignIn" onPress={signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    alignItems: 'center',
    marginTop: 20,
    padding: 50,
    backgroundColor: '#3f3f3f',
    height: '100%',
  },
  logo: {
    width: 250,
    height: 80,
    borderRadius: 15,
    marginBottom: 100,
    backgroundColor: '#fff',
    marginTop: 70,
  },
});

export default Login;
