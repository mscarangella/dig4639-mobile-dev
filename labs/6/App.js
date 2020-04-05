import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render(){
      return(
        <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Lab 6 Quiz!!</Text>
    </View>
     )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ED1FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: '20px',
    color: '#BF4061',
  },
});