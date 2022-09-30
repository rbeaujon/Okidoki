import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Doit from '../../../assets/images/doit.png';
import Input from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/';
import UserApi from '../../helper/UserApi'


const Login = (props) => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');


  const signIn = async () => {
    
    const parm =  {
      "login": user,
      "password": pass
    };
    
    const response = await UserApi(parm);
    if(response){
        const data = JSON.stringify(response);
        setUser(data)
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
  },
  logo: {
    width: 250,
    height: 80,
    borderRadius: 15,
    marginBottom: 100,
  },
});

export default Login;
