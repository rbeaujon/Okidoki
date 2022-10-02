import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FBFC',
    height: '100%',
    width: '100%',
  },
});

export default App;

