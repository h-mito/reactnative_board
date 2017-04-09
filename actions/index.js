export const select_board = (id) =>{
  return {
    type: "SELECT_BOARD",
    id: id
  };
}

export const comments_read = (comments) =>{
  return {
    type: "COMMENTS_READ",
    comments: comments
  };
}

export const token_change = (token) => {
  return {
    type: "TOKEN_CHANGE",
    token: token
  }
}

export const select_user = (id) =>{
  return {
    type: "SELECT_USER",
    id: id
  };
}
