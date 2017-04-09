import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const BoardLine = ({active, rowData, onPress}) => {
  let styleTitle = [styles.title];
  if (active){
    styleTitle = [styles.title, styles.active];
  }
  return (
    <View style={styles.row}>
      <Text style={styleTitle}>{rowData.title}</Text>
      <Button
        onPress={() => {
          onPress(rowData.id)
        }}
        title="select" />

    </View>
  );
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: "row"
  },
  title: {
    width: 300
  },
  active: {
    backgroundColor: "#58aacc"
  },
});

export default BoardLine;
