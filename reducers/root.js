import {combineReducers} from "redux";
import sel_board from "./sel_board";
import comments from "./comments";
import csrf_token from "./csrf_token";
import sel_user from "./sel_user";

const rootReducer = combineReducers({
  sel_board: sel_board,
  comments: comments,
  csrf_token: csrf_token,
  sel_user: sel_user
});

export default rootReducer;
