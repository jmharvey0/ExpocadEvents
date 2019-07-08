import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Create New User" color="#3a3838"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e4e4e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 359,
    width: 307,
  },
  buttonContainer: {
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#9e9ca3',
  },
});
