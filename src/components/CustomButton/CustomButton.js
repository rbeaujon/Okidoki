import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({name, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}> 
      <Text style={styles.button}>{name}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9A999A",
    height: 40,
    width: '100%',
    borderRadius: 10,
  },
  button: {
    textAlign: 'center',
    color: 'white',
    height: 100,
    width: '100%',
    marginTop: 10,
  },
});

export default CustomButton;
