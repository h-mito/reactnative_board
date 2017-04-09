import {connect} from "react-redux";
import {select_board} from "../actions/index";
import {HOST_ADDR} from "../constants/index";
import BoardList from "../components/BoardList";
import {comments_read, token_change} from "../actions/index";


const mapStateToProps = (state, ownProps) => {
  return {
    dsBoard: ownProps.dsBoard,
    sel_board: state.sel_board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardSelect: (id) => {
      dispatch(select_board(id));
      readCommentsAndRefresh(id, dispatch);
    }
  }
}

const readCommentsAndRefresh = (id, dispatch) =>{
  fetch('http://' + HOST_ADDR + '/board/readComments/' + id)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(comments_read(responseJson.rows));
      dispatch(token_change(responseJson['X-CSRF-Token']));
    })
    .catch((error) => {
      console.error(error);
    });
}

const CBoardList = connect(mapStateToProps, mapDispatchToProps)(BoardList);

export default CBoardList;
