import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA1XaeWFnozziWXmQc-qDD7_XbAC3I2ROU',
        authDomain: 'auth-3b326.firebaseapp.com',
        databaseURL: 'https://auth-3b326.firebaseio.com',
        storageBucket: 'auth-3b326.appspot.com',
        messagingSenderId: '429939767300'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
