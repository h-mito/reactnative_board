const comments = (state=[], action) => {
  switch (action.type) {
    case "COMMENTS_READ":
      return action.comments;
    default:
      return state;
  }
};

export default comments;
