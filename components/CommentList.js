import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button
} from 'react-native';
import CommentLine from "./CommentLine"

const CommentList = ({datas}) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  ds = ds.cloneWithRows(datas);

  return (
    <View style={{flex:12,padding: 10}}>
      <ListView
        dataSource={ds}
        renderRow={(rowData) => {
          return (
            <CommentLine rowData={rowData} />
          )
        }}
      />
    </View>
  );
}

export default CommentList;
