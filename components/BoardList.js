import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button
} from 'react-native';
import BoardLine from "./BoardLine"

const BoardList = ({dsBoard, sel_board, onBoardSelect}) => {

  return (
    <View style={{flex:4}}>
      <ListView
        dataSource={dsBoard}
        renderRow={(rowData) => {
          let act = rowData.id == sel_board ? true : false;
          return (
            <BoardLine
              active= {act}
              rowData={rowData}
              onPress={(id) => onBoardSelect(id)}
            />
          )
        }}
      />
    </View>
  );
}

export default BoardList;
