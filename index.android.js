/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App";
import rootReducer from "./reducers/root";

export default class rnative extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let store = createStore(rootReducer);

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

}



AppRegistry.registerComponent('rnative', () => rnative);
