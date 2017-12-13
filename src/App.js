import React, { Component } from 'react';
//import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import _ from 'lodash';
import reducers from './reducers';

import CategoryList from './components/CategoryList';
import RootNavigator from './Router';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDLOD6BP0zAF18lJjUqgahVmbfKYPuepJE',
      authDomain: 'emojiman-f9fc3.firebaseapp.com',
      databaseURL: 'https://emojiman-f9fc3.firebaseio.com',
      projectId: 'emojiman-f9fc3',
      storageBucket: 'emojiman-f9fc3.appspot.com',
      messagingSenderId: '33553150243'
    };
    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {},
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
