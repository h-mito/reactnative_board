import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {HOST_ADDR} from "../constants/index";
import CBoardList from "../containers/CBoardList";
import CCommentList from "../containers/CCommentList";
import CCommentAdd from "../containers/CCommentAdd";

export default class App extends Component {
  constructor(props){
    super(props);

    let dsBoard = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSourceBoard: dsBoard, users: []};
  }
  componentDidMount() {
    this.readInit();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native! and Rails5.0!!
        </Text>
        <CBoardList dsBoard={this.state.dataSourceBoard} />
        <CCommentAdd users={this.state.users} />
        <CCommentList />
      </View>
    );
  }

  readInit() {
    let dsBoard = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    fetch('http://' + HOST_ADDR + '/board/readBoardAndUser')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSourceBoard: dsBoard.cloneWithRows(responseJson.boards),
          users: responseJson.users
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
