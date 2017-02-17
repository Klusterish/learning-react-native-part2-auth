import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Button, Header, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: null, loggedOut: true,  };
  
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA1XaeWFnozziWXmQc-qDD7_XbAC3I2ROU',
        authDomain: 'auth-3b326.firebaseapp.com',
        databaseURL: 'https://auth-3b326.firebaseio.com',
        storageBucket: 'auth-3b326.appspot.com',
        messagingSenderId: '429939767300'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  showContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (<CardSection>
                  <Spinner size="large" />
                </CardSection>);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.showContent()}
      </View>
    );
  }
}

export default App;
