import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  Button,
  Picker
} from 'react-native';


const CommentAdd = ({sel_board, users, current_token, sel_user, onCommentPost,onUserChange}) => {
  let inpText;
  let items = [];
  const Item = Picker.Item;

  users.map((u) => {
    items.push(<Item key={u.id} label={u.name} value={u.id} />);
  })

  return (
    <View style={{flex:4}}>
      <View>
        <TextInput
          style={styles.comment}
          placeholder="Let's comment..."
          onChangeText={(text) => inpText = text}
        />
        <View style={styles.row}>
          <Picker
            style={styles.picker}
            selectedValue={sel_user}
            onValueChange={(val) => {
              onUserChange(val);
            }}>
            {items}
          </Picker>

          <Button
            style={styles.btn}
            onPress={() => {
              onCommentPost(sel_board, sel_user , inpText, current_token);
            }}
            title="投稿" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: "row"
  },
  comment: {
    width: 400
  },
  picker: {
    flex: 3,
  },
  btn: {
    flex:2
  },
});


export default CommentAdd;
