import React from "react";
import {connect} from "react-redux";
import CommentList from "../components/CommentList";

const mapStateToProps = (state) => {
  return {
    datas: state.comments
  }
}

const CCommentList = connect(mapStateToProps, null)(CommentList);

export default CCommentList;
