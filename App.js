import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
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

