import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD0HJ3tWyizkJW1fos42CwS4cGtGYwZsyw",
      authDomain: "authentication-dd80f.firebaseapp.com",
      databaseURL: "https://authentication-dd80f.firebaseio.com",
      projectId: "authentication-dd80f",
      storageBucket: "authentication-dd80f.appspot.com",
      messagingSenderId: "905972486376"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
