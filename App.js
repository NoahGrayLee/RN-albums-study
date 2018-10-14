import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD0HJ3tWyizkJW1fos42CwS4cGtGYwZsyw",
      authDomain: "authentication-dd80f.firebaseapp.com",
      databaseURL: "https://authentication-dd80f.firebaseio.com",
      projectId: "authentication-dd80f",
      storageBucket: "authentication-dd80f.appspot.com",
      messagingSenderId: "905972486376"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button whenPressed={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default: 
        return <Spinner sizeData="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
