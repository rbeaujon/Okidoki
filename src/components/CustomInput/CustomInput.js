import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({value, placeholder, setValue, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#100',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
});

export default CustomInput;
