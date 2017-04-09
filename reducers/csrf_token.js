const csrf_token = (state="", action) => {
  switch (action.type) {
    case "TOKEN_CHANGE":
      return action.token;
    default:
      return state;
  }
}

export default csrf_token;
